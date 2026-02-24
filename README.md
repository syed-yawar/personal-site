# Personal Website Template

[![Deploy Status](https://img.shields.io/github/actions/workflow/status/syed-yawar/personal-site/deploy-cloudflare.yml?branch=main&label=cloudflare%20deploy)](https://github.com/syed-yawar/personal-site/actions/workflows/deploy-cloudflare.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/syed-yawar/personal-site?style=social)](https://github.com/syed-yawar/personal-site/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/syed-yawar/personal-site?style=social)](https://github.com/syed-yawar/personal-site/network/members)

A free, open-source portfolio website template built with [Next.js](https://nextjs.org/), [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/). Fork it and make it your own in under an hour.

**[See it live →](https://syedyawar.com)**

## Why This Template?

- **Zero setup required.** Fork, open in GitHub Codespaces, and start editing.
- **Modern tech stack.** Next.js 16, React 19, TypeScript, Tailwind CSS v4.
- **Cloudflare ready.** Deploys automatically to Cloudflare Pages.
- **Dark mode.** System preference detection with manual toggle.
- **Blog ready.** Markdown posts with RSS feed (optional). Use `MarkdownRenderer` for consistent markdown rendering (About page, blog posts). Mermaid diagrams supported in writing and case studies. See [content style guide](./docs/content-style.md) for writing like a human engineer.
- **AI-friendly.** Works great with GitHub Copilot, Claude, and Cursor.

## Get Started

### Option 1: Local Development

```bash
gh repo clone syed-yawar/personal-site
cd personal-site
yarn install
yarn dev
```

Requires [GitHub CLI](https://cli.github.com/) and Node.js 20+ ([nvm](https://github.com/nvm-sh/nvm) recommended).

### Option 2: GitHub Codespaces

1. Click **Fork** at the top of this page
2. In your fork, click **Code** → **Codespaces** → **Create codespace**
3. Run `yarn dev`

No local setup needed. Everything runs in your browser.

## Customize It

Follow the **[adapting guide](./docs/adapting-guide.md)** for a step-by-step checklist.

**Content style:** When adding blog posts, about copy, or case studies, write like a human software engineer. Avoid emojis, em dashes, and AI-style phrasing. See [content style guide](./docs/content-style.md).

**Pro tip:** Open the adapting guide in Copilot Chat or your favorite AI assistant and ask it to help you customize each section.

## Commands

```bash
yarn dev      # Start dev server
yarn build    # Build for production
yarn format   # Format code
yarn test     # Run tests
```

## Deploy (Cloudflare Pages via GitHub Actions)

This repository includes `.github/workflows/deploy-cloudflare.yml` for direct static deployment to Cloudflare Pages.

- Triggers: push to `main` only
- Build output: Next.js static export in `out/`
- Deploy step: `wrangler pages deploy out`

Set these repository **Variables/Secrets** in GitHub before deploying:

- `CLOUDFLARE_ACCOUNT_ID` (variable or secret)
- `CLOUDFLARE_PROJECT_NAME` (variable or secret)
- `CLOUDFLARE_API_TOKEN` (secret)
- `NEXT_PUBLIC_SITE_URL` (variable or secret)

Recommended Cloudflare token scope: **Account → Cloudflare Pages:Edit** (least privilege).

### Visibility note for public repos

In a public GitHub repository, workflow files and run logs are generally visible to others. Secrets are encrypted and masked, but pipeline definitions and non-secret logs are not private.

### Public repo security defaults

- Deploys are triggered only by pushes to `main`.
- Manual deploy trigger (`workflow_dispatch`) is disabled.
- Production deploys should be protected with required reviewer(s) on the `production` environment.
- Logs are public in a public repo; secrets remain encrypted and masked.

If you need private deployment execution, use one of these patterns:

- Cloudflare Pages native Git integration (builds happen in Cloudflare, not GitHub Actions)
- Mirror to a private deployment repo and run Actions there

## Contributing

Contributions welcome! If you find a bug or want to improve something, please open a PR.

See [contributing guide](./docs/contributing.md) and [design goals](./docs/design-goals.md).

## License

[MIT](./LICENSE). Use it however you want.

## Attribution

This repository is a fork of [mldangelo/personal-site](https://github.com/mldangelo/personal-site), adapted under the `syed-yawar` account for personal portfolio customization.
