(function () {
  var docEl = document.documentElement;
  var themeStorageKey = "blog-theme-v2";
  docEl.dataset.js = "enabled";
  var siteBaseurl = document.body ? (document.body.dataset.baseurl || "") : "";

  function applyTheme(theme) {
    docEl.dataset.theme = theme === "dark" ? "dark" : "light";
  }

  var themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = localStorage.getItem(themeStorageKey) === "dark" ? "dark" : "light";
      var next = current === "dark" ? "light" : "dark";
      localStorage.setItem(themeStorageKey, next);
      applyTheme(next);
    });
  }

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
      titleNode.innerHTML = '<span class="callout__icon" aria-hidden="true">◆</span><span>' + escapeHtml(title) + "</span>";
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

  if (searchInput && searchResults && window.MiniSearch) {
    fetch((siteBaseurl + "/search.json").replace(/\/{2,}/g, "/"))
      .then(function (response) { return response.json(); })
      .then(function (documents) {
        var miniSearch = new MiniSearch({
          fields: ["title", "summary", "tags", "series", "date", "display_date"],
          storeFields: ["title", "url", "summary", "tags", "series", "display_date", "reading_time"],
          searchOptions: {
            boost: { title: 6, summary: 4, tags: 3, series: 2, date: 1 },
            prefix: true,
            fuzzy: 0.2
          }
        });
        miniSearch.addAll(documents);

        function renderResults(query) {
          if (!query) {
            searchResults.hidden = true;
            searchResults.innerHTML = "";
            return;
          }

          var results = miniSearch.search(query, { combineWith: "OR" }).slice(0, 8);
          searchResults.hidden = false;

          if (!results.length) {
            searchResults.innerHTML = "<p>No matching posts found.</p>";
            return;
          }

          searchResults.innerHTML = '<div class="search-results__list">' + results.map(function (result) {
            var tags = (result.tags || []).map(function (tag) {
              return '<span class="tag-chip">' + escapeHtml(tag) + "</span>";
            }).join("");
            return (
              '<article class="search-result">' +
                '<a href="' + result.url + '" data-post-link>' +
                  '<h2>' + escapeHtml(result.title) + '</h2>' +
                '</a>' +
                '<div class="search-result__meta">' +
                  '<span>' + escapeHtml(result.display_date || "") + "</span>" +
                  '<span>' + escapeHtml(String(result.reading_time || "")) + ' min read</span>' +
                  (result.series ? '<span>' + escapeHtml(result.series) + "</span>" : "") +
                "</div>" +
                '<p>' + escapeHtml(result.summary || "") + "</p>" +
                (tags ? '<div class="chip-row">' + tags + "</div>" : "") +
              "</article>"
            );
          }).join("") + "</div>";
        }

        searchInput.addEventListener("input", function () {
          renderResults(searchInput.value.trim());
        });
      })
      .catch(function () {
        searchResults.hidden = true;
      });
  }

  document.querySelectorAll("[data-tag-toolbar]").forEach(function (toolbar) {
    var container = toolbar.closest(".page-shell");
    var list = container ? container.querySelector("[data-post-list]") : null;
    if (!list) return;

    var buttons = toolbar.querySelectorAll("[data-tag-filter-button]");
    var resetButton = toolbar.querySelector("[data-filter-reset]");
    var cards = list.querySelectorAll("[data-filterable-post]");

    function setActive(button) {
      toolbar.querySelectorAll(".tag-chip--button").forEach(function (item) {
        item.classList.toggle("is-active", item === button);
      });
    }

    function filterBy(tag) {
      cards.forEach(function (card) {
        var tags = card.dataset.tags || "";
        var show = !tag || tags.indexOf(tag) !== -1;
        card.classList.toggle("hidden-by-filter", !show);
      });
    }

    if (resetButton) {
      resetButton.addEventListener("click", function () {
        setActive(resetButton);
        filterBy("");
      });
    }

    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        setActive(button);
        filterBy(button.dataset.tagFilterButton);
      });
    });

    if (window.location.hash) {
      var hash = window.location.hash.slice(1);
      var matching = toolbar.querySelector('[id="' + CSS.escape(hash) + '"]');
      if (matching) matching.click();
    }
  });

  if (document.body.dataset.listingPage !== "true") return;

  var modal = document.querySelector("[data-post-modal]");
  var modalDialog = modal && modal.querySelector("[data-modal-dialog]");
  var modalContent = modal && modal.querySelector("[data-modal-content]");
  var closeButton = modal && modal.querySelector("[data-modal-close-button]");
  var lastFocused = null;
  var currentUrl = window.location.pathname + window.location.search + window.location.hash;

  function getFocusable() {
    return modalDialog.querySelectorAll("a[href], button, input, textarea, select, [tabindex]:not([tabindex='-1'])");
  }

  function closeModal(useHistory) {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
    if (useHistory && window.history.state && window.history.state.modal) {
      window.history.back();
    }
  }

  function fillModalFromDocument(doc) {
    var article = doc.querySelector("[data-modal-article]");
    if (!article || !modalContent) return false;
    modalContent.innerHTML = article.outerHTML;
    transformCallouts(modalContent);
    return true;
  }

  function openModal(url, pushState) {
    lastFocused = document.activeElement;
    fetch(url, { headers: { "X-Requested-With": "XMLHttpRequest" } })
      .then(function (response) {
        if (!response.ok) throw new Error("Unable to load post");
        return response.text();
      })
      .then(function (html) {
        var parser = new DOMParser();
        var articleDoc = parser.parseFromString(html, "text/html");
        if (!fillModalFromDocument(articleDoc)) {
          window.location.href = url;
          return;
        }
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        modalDialog.focus();
        if (pushState) {
          window.history.pushState({ modal: true, url: url }, "", url);
        }
      })
      .catch(function () {
        window.location.href = url;
      });
  }

  window.history.replaceState({ modal: false, url: currentUrl }, "", currentUrl);

  document.addEventListener("click", function (event) {
    var link = event.target.closest("[data-post-link]");
    if (!link) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target && link.target !== "_self") return;
    if (!modal) return;
    event.preventDefault();
    openModal(link.href, true);
  });

  if (modal) {
    modal.addEventListener("click", function (event) {
      if (event.target.hasAttribute("data-modal-close")) {
        closeModal(true);
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      closeModal(true);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (!modal || modal.hidden) return;
    if (event.key === "Escape") {
      event.preventDefault();
      closeModal(true);
    }
    if (event.key === "Tab") {
      var focusable = Array.prototype.slice.call(getFocusable());
      if (!focusable.length) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  window.addEventListener("popstate", function (event) {
    if (event.state && event.state.modal && event.state.url) {
      openModal(event.state.url, false);
    } else {
      closeModal(false);
    }
  });
}());
