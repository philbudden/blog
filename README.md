# Jekyll Blog

This is a self-contained Jekyll blog designed for GitHub Pages deployment. It
is Markdown-first, responsive, accessible by default, and progressively
enhances article navigation with a modal overlay when JavaScript is available.

## Recommended architecture

The site uses a custom Jekyll theme rather than an off-the-shelf theme. That
decision keeps the design closer to the Obsidian vault and avoids fighting a
generic theme's assumptions about layout, typography, or interaction design.

Key choices:

- `Jekyll` for static generation and GitHub Pages compatibility.
- `_articles/` as a collection instead of the default `_posts/`, so filenames
  can stay human-readable rather than using date-prefixed post filenames.
- `_series/` as a collection for series metadata and standalone series pages.
- Canonical article pages with modal-overlay progressive enhancement on listing
  pages. This preserves accessibility, no-JS fallback, and deep links.
- `MiniSearch` vendored locally for fuzzy client-side search without a Node
  build pipeline.

Trade-offs:

- The modal is an enhancement, not the only reading mode. Direct article URLs
  still render as normal pages.
- Search indexes are built in the browser from `search.json`, which is simpler
  to maintain than Pagefind for a personal blog of this size, but less suited
  to very large archives.
- `draft: true` is treated as a workflow flag that hides content from listings,
  search, tags, and series pages. For hard exclusion from the built site, keep
  the file out of `_articles/` until it is ready.

## Folder structure

```text
work/blog-site/
├── _articles/              # Markdown blog posts
├── _series/                # One Markdown file per series
├── _includes/              # Reusable template fragments
├── _layouts/               # Page and article layouts
├── assets/
│   ├── css/                # Site styling and design tokens
│   ├── js/                 # Theme, modal, tag filtering, callout, and search JS
│   └── vendor/             # Vendored third-party browser assets
├── series/index.html       # Series index page
├── tags/index.html         # Tag browser and filter page
├── index.html              # Home page
├── search.json             # Search document feed for MiniSearch
└── .github/workflows/      # GitHub Pages deployment workflow
```

## How to create a new post

1. Add a new Markdown file to `_articles/`.
2. Use front matter like this:

```yaml
---
title: "My New Post"
date: 2026-07-01
summary: "One or two sentences for cards and search results."
tags:
  - ai
  - systems-thinking
series: interview-questions
draft: false
layout: article
---
```

3. Write the post body in Markdown.

Notes:

- `summary` is used on the home page, tag pages, series pages, and search
  results.
- `series` is optional.
- `draft` is optional. Set it to `true` if you want the post hidden from site
  navigation and search while still keeping the file in place.

## How to create a new series

1. Add a new Markdown file under `_series/`, for example
   `_series/interview-questions.md`.
2. Use front matter like this:

```yaml
---
title: Interview Questions
slug: interview-questions
summary: Short explanation of the series.
order_by: date
order_direction: asc
---
```

3. Reference that slug from any article front matter:

```yaml
series: interview-questions
```

Series ordering:

- `order_by: date` is the simplest default.
- If you want custom reading order, add a field such as `series_order` to your
  posts and set `order_by: series_order` on the series document.

## How tags work

- Tags live in each article's front matter under `tags`.
- The home page exposes quick tag filters for the latest posts.
- `/tags/` provides a dedicated tag browser.
- With JavaScript enabled, selecting a tag filters the newest post list in
  place.
- Without JavaScript, the tags page still exposes grouped tag sections so the
  site remains navigable.

## How search works

- The build emits `search.json` from the published article collection.
- The browser loads that JSON and builds a `MiniSearch` index locally.
- Search covers:
  - title
  - summary
  - tags
  - series
  - date
- Matching uses prefix search plus fuzzy matching to make partial or slightly
  imperfect queries still useful.

## How to customise the theme

Most of the design tokens live near the top of `assets/css/site.css`.

Useful places to change:

- Typography:
  - `--font-body`
  - `--font-ui`
  - `--font-mono`
- Colours:
  - `--color-base`
  - `--color-text`
  - `--color-accent`
  - light and dark theme blocks
- Shape:
  - `--radius-tag`
  - `--radius-card`
  - `--radius-frame`
- Layout:
  - `--content-width`
  - `--prose-width`

The palette and layout choices are intentionally based on the current Obsidian
setup:

- Theme: `AnuPpuccin`
- Light flavour: `Rosé Pine`
- Dark flavour: `Frappe`
- Accent: `teal`
- Reading font: `New York`
- Rounded card-style surfaces
- Sleek callout treatment

## Deployment

This project includes `.github/workflows/pages.yml` for GitHub Pages.
The current external repository is [philbudden/blog](https://github.com/philbudden/blog).
It is currently deployed at [https://www.data-savvy-solutions.com/blog/](https://www.data-savvy-solutions.com/blog/).
The public RSS feed lives at [https://www.data-savvy-solutions.com/blog/feed.xml](https://www.data-savvy-solutions.com/blog/feed.xml).

Typical deployment flow:

1. Put this directory in its own GitHub repository.
2. Push to the `main` branch.
3. Enable GitHub Pages for the repository.
4. Let the workflow build and deploy the site.

If you deploy the site under a different host or path, update `url` and
`baseurl` in `_config.yml` so asset and page links resolve correctly.

## Assumptions

- The site lives as a self-contained repo snapshot under `work/blog-site/`.
- Current ready posts were imported as the initial public article corpus.
- No Node-based build pipeline is required or assumed.
- The modal overlay is intentionally progressive enhancement rather than the
  canonical article experience.

## Future enhancements

- sitemap and robots.txt tuning
- SEO metadata and social cards
- pagination for larger archives
- syntax-theme refinement or code-copy buttons
- related-post suggestions
- richer series metadata such as cover text or artwork
- automatic import from the writing workspace if that becomes part of the long-term workflow
