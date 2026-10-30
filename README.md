# qiyang.dev

Personal website and blog of [Qiyang Wang](https://qiyang.dev/), a software engineer based in Beijing, China.

Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and [AstroPaper](https://github.com/satnaing/astro-paper). The site includes posts, tags, archives, search, RSS, and light and dark themes.

## Getting started

Requirements: Node.js 22.23.4 or later and pnpm.

```sh
pnpm install
pnpm dev
```

The development server runs at `http://localhost:4321` by default.

| Command             | Description                                                          |
| ------------------- | -------------------------------------------------------------------- |
| `pnpm dev`          | Start the development server.                                        |
| `pnpm build`        | Check types, build the site, and generate the Pagefind search index. |
| `pnpm preview`      | Preview the production build.                                        |
| `pnpm lint`         | Run ESLint.                                                          |
| `pnpm format:check` | Check formatting with Prettier.                                      |
| `pnpm format`       | Format the project.                                                  |
| `pnpm sync`         | Generate Astro types.                                                |

The build downloads Google Sans Code through Astro's Google Fonts provider, so it requires access to Google Fonts. The generated Pagefind index is copied to `public/pagefind/` and is ignored by Git.

## Project structure

- `astro-paper.config.ts` — site metadata, social links, and feature settings.
- `src/pages/` — site routes, including the homepage.
- `src/content/pages/about.md` — About page content.
- `src/content/posts/` — Markdown and MDX posts.
- `src/components/`, `src/layouts/`, and `src/styles/` — shared UI and styling.
- `public/` — static assets, including the favicon.

Posts use the schema in `src/content.config.ts`. Each post requires a title, description, and publication date; optional fields include tags, draft status, and a featured flag. Posts can be organized in subdirectories, which become part of their URLs.

## License

This project is based on [AstroPaper](https://github.com/satnaing/astro-paper) by Sat Naing and contributors. See [LICENSE](LICENSE) for the MIT license.
