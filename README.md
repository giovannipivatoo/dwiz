# DWIZ — Davide Zonta

Portfolio for DWIZ: music for picture and released records featuring his co-production. Built with React 19, Vinext/Vite and the Next.js App Router, published to GitHub Pages through a Next.js static export. The existing Vinext/Cloudflare Workers build remains available.

Read [AGENTS.md](AGENTS.md) for the approved design direction, content decisions and constraints before changing the site.

## Current design

**01 Cinema** is the selected direction. Work is divided into **Sync** and **Production**. The two existing Sync projects are preserved; Production contains the seven releases selected by the artist, in his order, all credited **Co-production**.

Three Production layouts remain available for review; none has been selected as final yet:

| Layout | Preview path | Composition |
| --- | --- | --- |
| 01 Sleeves | `/work/production?layout=sleeves` | Cover-led grid: three larger records followed by four smaller records on desktop |
| 02 Index | `/work/production?layout=index` | Discography list with an artwork preview that follows hover and keyboard focus; row thumbnails on mobile |
| 03 Spotlight | `/work/production?layout=spotlight` | Featured record, previous/next controls and a selector for all seven releases |

Static HTML uses Cinema and Sleeves; URL-selected variants activate when JavaScript loads. The Sync/Production category links retain the Production layout choice. Missing or unknown layout values use Sleeves. Earlier site-wide concepts remain accessible through `?v=editorial` and `?v=studio`; Cinema is the default. Production always uses Cinema.

## Local development

Requires Node.js **22.13.0 or newer** and npm. On a fresh checkout:

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 5174
```

Open `http://127.0.0.1:5174`. Use another free port if needed.

```sh
npm test
npx --no-install eslint app tests
```

`npm test` builds the Worker, validates the Sites artifact, then runs the rendered-HTML integration tests. `npm run build` uses the portable Node-based `scripts/build-verified.mjs`; it was verified on macOS. The separate `npm run install:ci` helper targets Linux and requires `flock`, `curl` and GNU `timeout`.

Other commands:

- `npm run start`: serve the built application.
- `npm run validate:artifact`: validate an existing Worker and packaged hosting manifest.
- `npm run lint`: lint the checkout through the project runtime helper.
- `npm run db:generate`: generate Drizzle migrations if database features are added.

## Source map

| File or directory | Responsibility |
| --- | --- |
| `app/site-data.ts` | Identity, Sync project content, contact configuration, social image |
| `app/variants.ts` | Original site-wide design variants and URL helpers |
| `app/components.tsx` | Shared navigation, footer and Sync project cards |
| `app/cinema-hero.tsx` | Homepage project selection |
| `app/work/work-navigation.tsx` | Sync/Production navigation and Production layout selector |
| `app/work/production/releases.ts` | Authoritative release order, credits, artwork paths and listening links |
| `app/work/production/production-catalog.tsx` | All three Production layouts and interactions |
| `app/work/project-page.tsx`, `app/youtube-video.tsx` | Shared Sync project page and click-to-load video |
| `app/globals.css` | Shared styling, design variants and responsive layouts |
| `public/work/`, `public/production/` | Local official project stills and release artwork |
| `public/fonts/` | Anton font and its OFL license, used by the Editorial concept |
| `tests/rendered-html.test.mjs` | Public routes, content, variants, metadata, video loading and legacy redirects |

## GitHub Pages

Public URL: https://giovannipivatoo.github.io/dwiz/

Every push to `main` runs `.github/workflows/pages.yml`: install locked dependencies, build and test the static export, then deploy `out/` to GitHub Pages. GitHub Pages must use **GitHub Actions** as its publishing source.

```sh
npm run test:pages
```

`build:pages` enables `output: export`, `/dwiz` as `basePath`, and trailing slashes. `app/asset-path.ts` prefixes raw image URLs; the CSS build bundles the local font. Page metadata remains server-generated while `page-content.tsx` components read query selections through `app/query-parameters.tsx`. Legacy project addresses use HTML redirects in the static export and HTTP redirects in the Worker.

Metadata uses the public Pages URL for the static export; the Worker still derives page metadata from the request host. Sitemap and robots use `siteConfig.url`. Update that URL, `next.config.ts`, and static legacy redirect paths together if the repository or domain changes. `tsconfig.pages.json` checks the exported app without the optional Cloudflare-only starter helpers.

## Sites and optional integrations

`.openai/hosting.json` associates this checkout with its Sites project. D1 and R2 bindings are currently disabled. The build emits the ESM Worker at `dist/server/index.js` and the packaged hosting manifest at `dist/.openai/hosting.json`. There is no `wrangler.jsonc`.

Git commits and pushes are separate from Sites publication. No Sites deployment was requested or performed; GitHub Pages is the selected publication destination.

The starter retains optional D1/Drizzle examples and `app/chatgpt-auth.ts` helpers. The portfolio currently has no database-backed content or sign-in flow. If sign-in is introduced, use the existing helpers and platform access controls; Dispatch owns `/signin-with-chatgpt`, `/signout-with-chatgpt` and `/callback`.

Dependencies, builds, runtime state, environment files and logs are ignored by Git. Browser QA used a temporary Playwright installation outside the repository; Playwright is not a project dependency.

## Latest validation — 8 September 2026

- Build, Sites artifact validation and all **8 integration tests** passed.
- ESLint passed for `app` and `tests`.
- Browser checks passed at 320, 390, 768 and 1440 px: category navigation, artwork loading, Index keyboard preview, Spotlight selection and previous/next wraparound.
- Final checks confirmed seven uniform Co-production credits, no loop distinction, no horizontal overflow and no browser JavaScript errors.

Standalone `tsc --noEmit` still encounters the starter's missing Cloudflare worker type declarations (`cloudflare:workers`, `Fetcher`, `D1Database`); this is separate from the successful build and integration tests.

## Pages validation — 9 September 2026

- Next.js static export and application TypeScript checks passed.
- Three export tests cover public routes, local assets and navigation under `/dwiz`, release credits, social metadata, font URLs, sitemap, robots and static redirects.
- All eight Worker integration tests and ESLint for `app` and `tests` passed.
- Spotlight renders only the selected listening link; its test checks the other releases through their visible selectors.
