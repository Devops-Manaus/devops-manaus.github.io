# Repository Guidelines

## Project Structure & Module Organization

This is the DevOps Manaus static site, built with Deno, Lume, Nunjucks, and SCSS.

- Root `*.njk` files define pages; `_includes/` holds layouts and reusable components.
- `_data/*.json` contains site-wide content such as navigation, hero, and footer data.
- Content collections live in `about/`, `services/`, `benefits/`, `faq/`, `partners/`, and `articles/`. Their `_data.yml` files set collection defaults.
- `styles/main.scss` is the stylesheet entry point. Put public images in `public/uploads/`.
- `_config.ts` configures Lume and `_cms.ts` configures the CMS. Generated output is `_site/`; do not edit it by hand.

## Build, Test, and Development Commands

```bash
deno task dev    # serve the site at http://localhost:3000
deno task cms    # run Lume CMS at http://localhost:3001; reads .env
deno task build  # build the production site into _site/
```

Run `deno task build` before committing site or template changes. There is no separate automated test suite; a successful production build is the required check.

## Coding Style & Naming Conventions

Use the existing formatting: two-space indentation in JSON, TypeScript, Nunjucks, and SCSS. Keep templates small and reuse `_includes/components/` for repeated UI. Name Markdown content with lowercase kebab-case slugs, for example `articles/docker-e-podman-no-dia-a-dia.md`. Include valid front matter and use site-relative image paths such as `/uploads/example.jpg`.

Prefer editing data files and Markdown over duplicating content in templates. Do not commit credentials: CMS configuration is read from `.env` (`CMS_USER`, `CMS_PASSWORD`).

## Commit & Pull Request Guidelines

Recent history uses short imperative messages, often with a scope: `content: atualiza artigos e seções` or `improve README.md with the logic of lume cms`. Keep commits focused on one change.

PRs should describe the visible change, link the related issue when one exists, and include screenshots for layout or styling changes. Confirm `deno task build` passes and avoid committing generated `_site/` output unless a deployment workflow specifically requires it.
