# Philip Budden Website

This is a self-contained Jekyll site designed for GitHub Pages deployment. It
is Markdown-first, responsive, accessible by default, and structured as the
canonical public home for blog posts, long-form publications, and professional
context.

## Recommended architecture

The site uses a custom Jekyll theme rather than an off-the-shelf theme. That
decision keeps the design closer to the Obsidian vault and avoids fighting a
generic theme's assumptions about layout, typography, or interaction design.

Key choices:

- `Jekyll` for static generation and GitHub Pages compatibility.
- `_articles/` as a collection instead of the default `_posts/`, so filenames
  can stay human-readable rather than using date-prefixed post filenames.
- `_publications/` as a collection for whitepapers, frameworks, guides, reports,
  and other long-form public artefacts.
- `_series/` as a collection for series metadata and standalone series pages.
- Canonical article pages with modal-overlay progressive enhancement on listing
  pages. This preserves accessibility, no-JS fallback, and deep links.
- `MiniSearch` vendored locally for fuzzy client-side search without a Node
  build pipeline.
- Placeholder publication pages are allowed for local review, but must be
  clearly labelled and replaced before public release.

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
philbudden-blog/
├── _articles/              # Markdown blog posts
├── _publications/          # Long-form public artefacts
├── _series/                # One Markdown file per series
├── _includes/              # Reusable template fragments
├── _layouts/               # Page and article layouts
├── assets/
│   ├── css/                # Site styling and design tokens
│   ├── js/                 # Theme, modal, tag filtering, callout, and search JS
│   └── vendor/             # Vendored third-party browser assets
├── about/index.md          # Professional about page
├── blog/index.html         # Blog archive and filters
├── publications/index.html # Publication index
├── series/index.html       # Series index page
├── tags/index.html         # Legacy redirect to the Writing page topic filters
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

## How to create a new publication

Only add material to `_publications/` when it is explicitly approved for public
release. Do not import private notes, drafts, organisation-specific material, or
ambiguous Obsidian documents into this site.

1. Add a new Markdown file to `_publications/`.
2. Use front matter like this:

```yaml
---
title: "My Public Whitepaper"
date: 2026-07-13
publication_kind: Whitepaper
summary: "One or two sentences for listings and search results."
pdf_url: /assets/publications/my-public-whitepaper.pdf
topics:
  - Responsible AI adoption
  - AI strategy
draft: false
---
```

3. Write the publication body in Markdown.
4. Add the PDF to a public asset location and point `pdf_url` at it.

Notes:

- Leave `pdf_url` out until the PDF has been generated and approved.
- Use `placeholder: true` only for local review scaffolding. Placeholder pages
  should be replaced before publication.
- Blog posts do not need downloadable PDFs.

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
- The Writing page exposes topic filters alongside series filters.
- Article tag chips link back to the Writing page with the matching topic
  selected.
- `/tags/` remains only as a legacy forwarding page for old links.
- With JavaScript enabled, selecting a topic filters the writing list in place.

## How search works

- The build emits `search.json` from published articles and publications.
- The browser loads that JSON and builds a `MiniSearch` index locally.
- Search covers:
  - title
  - summary
  - content type
  - tags
  - topics
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

The current visual direction is editorial rather than corporate: warm paper-like
surfaces, strong readable typography, compact card radii, and a teal accent.
The site should feel credible and polished without adopting generic marketing
language or a heavy corporate visual system.

## Deployment

This project includes `.github/workflows/pages.yml` for GitHub Pages.
The current external repository is [philbudden/blog](https://github.com/philbudden/blog).
It is intended to be deployed at [https://philipbudden.co.uk/](https://philipbudden.co.uk/).
The public RSS feed will live at [https://philipbudden.co.uk/feed.xml](https://philipbudden.co.uk/feed.xml).

Typical deployment flow:

1. Put this directory in its own GitHub repository.
2. Push to the `main` branch.
3. Enable GitHub Pages for the repository.
4. Let the workflow build and deploy the site.

If you deploy the site under a different host or path, update `url` and
`baseurl` in `_config.yml` so asset and page links resolve correctly.

## Local preview with a devcontainer

This repo includes a standard `.devcontainer/` setup for local and remote VS Code development without installing Ruby, Bundler, or Jekyll on the host.

The intended remote workflow matches the `Neo to Mac Mini Remote Dev Setup` note:

1. From the Neo, connect to the Mini with VS Code Remote SSH.
2. Open `~/Developer/philbudden-blog` on the Mini.
3. Run `Dev Containers: Reopen in Container`.
4. Start the preview with the repo task:

   `Terminal -> Run Task... -> Start Jekyll Preview`

   Or run the underlying command manually in the container terminal:

```bash
bundle exec jekyll serve --livereload --host 0.0.0.0 --port 4000
```

5. Open the forwarded preview port from VS Code on the Neo.

Notes:

- Port `4000` is the Jekyll preview site.
- Port `35729` is LiveReload.
- The repo also includes a `Build Jekyll Site` task for one-off local validation without starting the preview server.
- Binding to `0.0.0.0` is required so the forwarded port can reach Jekyll from outside the container.
- The container uses the multi-architecture `mcr.microsoft.com/devcontainers/ruby` base image, so Apple Silicon runs natively where available and non-native fallback remains possible through the container runtime.

## Assumptions

- Current ready posts were imported as the initial public article corpus.
- No Node-based build pipeline is required or assumed.
- The modal overlay is intentionally progressive enhancement rather than the
  canonical article experience.
- Obsidian remains a mixed private/public workspace. This repository should
  expose only content that has been explicitly approved for public release.

## Future enhancements

- sitemap and robots.txt tuning
- SEO metadata and social cards
- pagination for larger archives
- publication PDF generation pipeline
- dedicated asset folders for publication downloads and social images
- syntax-theme refinement or code-copy buttons
- related-post suggestions
- richer series metadata such as cover text or artwork
- automatic import from the writing workspace if that becomes part of the long-term workflow
