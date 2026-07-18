(function () {
  document.documentElement.dataset.js = "enabled";
  var siteBaseurl = document.body ? (document.body.dataset.baseurl || "") : "";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function transformCallouts(root) {
    root.querySelectorAll("blockquote").forEach(function (blockquote) {
      var firstParagraph = blockquote.querySelector("p");
      if (!firstParagraph) return;
      var text = firstParagraph.textContent.trim();
      var match = text.match(/^\[!([A-Z0-9_-]+)\]\s*(.*)$/i);
      if (!match) return;

      var type = match[1].toLowerCase();
      var title = match[2] ? match[2].trim() : type;
      firstParagraph.textContent = firstParagraph.textContent.replace(/^\[![^\]]+\]\s*/i, "");
      if (firstParagraph.textContent.trim() === "") {
        firstParagraph.remove();
      }

      var callout = document.createElement("div");
      callout.className = "callout callout--" + type;
      var titleNode = document.createElement("div");
      titleNode.className = "callout__title";
      titleNode.innerHTML = '<span class="callout__icon" aria-hidden="true">+</span><span>' + escapeHtml(title) + "</span>";
      var contentNode = document.createElement("div");
      contentNode.className = "callout__content";

      while (blockquote.firstChild) {
        contentNode.appendChild(blockquote.firstChild);
      }

      callout.appendChild(titleNode);
      callout.appendChild(contentNode);
      blockquote.replaceWith(callout);
    });
  }

  transformCallouts(document);

  var searchInput = document.querySelector("[data-search-input]");
  var searchResults = document.querySelector("[data-search-results]");
  var searchForm = document.querySelector("[data-search-form]");

  if (searchInput && searchResults && window.MiniSearch) {
    fetch((siteBaseurl + "/search.json").replace(/\/{2,}/g, "/"))
      .then(function (response) { return response.json(); })
      .then(function (documents) {
        var miniSearch = new MiniSearch({
          fields: ["title", "summary", "type", "tags", "topics", "series", "date", "display_date"],
          storeFields: ["title", "url", "summary", "type", "tags", "topics", "series", "display_date", "reading_time"],
          searchOptions: {
            boost: { title: 6, summary: 4, tags: 3, topics: 3, series: 2, type: 2, date: 1 },
            prefix: true,
            fuzzy: 0.2
          }
        });
        miniSearch.addAll(documents);
        var currentResults = [];

        function renderResults(query) {
          if (!query) {
            currentResults = [];
            searchResults.hidden = true;
            searchResults.innerHTML = "";
            return;
          }

          var results = miniSearch.search(query, { combineWith: "OR" }).slice(0, 8);
          currentResults = results;
          searchResults.hidden = false;

          if (!results.length) {
            searchResults.innerHTML = '<p class="search-results__empty">No matching pieces found.</p>';
            return;
          }

          searchResults.innerHTML = '<div class="search-results__list">' + results.map(function (result) {
            var tags = (result.tags || []).concat(result.topics || []).map(function (label) {
              return '<span class="tag-chip">' + escapeHtml(label) + "</span>";
            }).join("");
            return (
              '<article class="search-result">' +
                '<a class="search-result__title" href="' + result.url + '">' +
                  '<h2>' + escapeHtml(result.title) + '</h2>' +
                '</a>' +
                '<div class="search-result__meta">' +
                  '<span>' + escapeHtml(result.type || "Post") + "</span>" +
                  '<span>' + escapeHtml(result.display_date || "") + "</span>" +
                  '<span>' + escapeHtml(String(result.reading_time || "")) + ' min read</span>' +
                  (result.series ? '<span>' + escapeHtml(result.series) + "</span>" : "") +
                '</div>' +
                '<p>' + escapeHtml(result.summary || "") + '</p>' +
                (tags ? '<div class="archive-entry__tags">' + tags + '</div>' : '') +
              '</article>'
            );
          }).join("") + "</div>";
        }

        function activateFirstResult(event) {
          var query = searchInput.value.trim();
          renderResults(query);
          if (!currentResults.length) return;
          if (event) event.preventDefault();
          window.location.href = currentResults[0].url;
        }

        searchInput.addEventListener("input", function () {
          renderResults(searchInput.value.trim());
        });

        searchInput.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
            activateFirstResult(event);
          }
        });

        if (searchForm) {
          searchForm.addEventListener("submit", function (event) {
            activateFirstResult(event);
          });
        }
      })
      .catch(function () {
        searchResults.hidden = true;
      });
  }

  document.querySelectorAll("[data-post-list]").forEach(function (list) {
    var container = list.closest(".archive-shell") || document;
    var cards = list.querySelectorAll("[data-filterable-post]");
    var tagToolbar = container.querySelector("[data-tag-toolbar]");
    var seriesToolbar = container.querySelector("[data-series-toolbar]");
    var currentTag = "";
    var currentSeries = "";

    function applyFilters() {
      cards.forEach(function (card) {
        var tags = card.dataset.tags || "";
        var series = card.dataset.series || "";
        var matchesTag = !currentTag || tags.indexOf(currentTag) !== -1;
        var matchesSeries = !currentSeries || series === currentSeries;
        card.classList.toggle("hidden-by-filter", !(matchesTag && matchesSeries));
      });
    }

    function setActive(toolbar, activeButton) {
      if (!toolbar) return;
      toolbar.querySelectorAll(".filter-chip").forEach(function (item) {
        item.classList.toggle("is-active", item === activeButton);
      });
    }

    if (tagToolbar) {
      var tagButtons = tagToolbar.querySelectorAll("[data-tag-filter-button]");
      var tagResetButton = tagToolbar.querySelector("[data-filter-reset]");

      if (tagResetButton) {
        tagResetButton.addEventListener("click", function () {
          currentTag = "";
          setActive(tagToolbar, tagResetButton);
          applyFilters();
        });
      }

      tagButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          currentTag = button.dataset.tagFilterButton;
          setActive(tagToolbar, button);
          applyFilters();
        });
      });

      if (window.location.hash) {
        var hash = window.location.hash.slice(1);
        var matching = tagToolbar.querySelector('[id="' + CSS.escape(hash) + '"]');
        if (matching) matching.click();
      }
    }

    if (seriesToolbar) {
      var seriesButtons = seriesToolbar.querySelectorAll("[data-series-filter-button]");
      var seriesResetButton = seriesToolbar.querySelector("[data-series-filter-reset]");

      if (seriesResetButton) {
        seriesResetButton.addEventListener("click", function () {
          currentSeries = "";
          setActive(seriesToolbar, seriesResetButton);
          applyFilters();
        });
      }

      seriesButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          currentSeries = button.dataset.seriesFilterButton;
          setActive(seriesToolbar, button);
          applyFilters();
        });
      });
    }
  });
}());
