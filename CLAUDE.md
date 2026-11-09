# CLAUDE.md — WRG website

Instructions for Claude Code when working on this repository.

## Project

Marketing site for The Water Restoration Group (WRG). Astro 5, static output, served in production by `server.mjs` (Node built-ins only) on Hostinger's Node.js Web Apps. No CMS, no database, no client framework.

## Commands

- `npm run dev` — local dev server (http://localhost:4321)
- `npm run build` — build to `dist/` (postbuild copies `server.mjs` into `dist/`)
- `npm start` — serve `dist/` (PORT env, default 3000)
- `npm run check:links` — run after every build; must print `OK`

Before committing: `npm run build && npm run check:links`.

## Language

- **Site copy:** US English.
- **Docs, commit messages, comments for the client (`docs/`):** Spanish. Code comments: English.

## Content rules (non-negotiable)

- Never invent data: no reviews, people, names, credentials, licenses, statistics, response times, years in business, project counts, guarantees or insurance outcomes. If something is missing, show a `ReviewNote`/`ReviewFlag` (visible only in review mode) and add it to `docs/pendientes.md`.
- Phone: **(844) 379-9283**, `tel:+18443799283`, vanity **1 (844) DRY-WATER**. Always from `src/data/site.ts` (`company.phone`).
- Offices (from `src/data/site.ts`): Miami HQ 555 NW 95th St, Miami, FL 33150 · West Palm Beach 1705 Donna Road, Unit #10, West Palm Beach, FL 33409 · Atlanta/Smyrna 5028 S Atlanta Rd SE, Smyrna, GA 30080. Location pages must stay genuinely different; never reuse Florida evidence as Georgia evidence.
- Excluded: Guided response (damage selectors, questionnaires, wizards), Events, Preferred Client Program, Asbestos Abatement, forms (contact is by phone) — unless the client approves them.
- Routes follow `docs/sitemap.md` (WRG_Sitemap_Review-3). Trailing slash always.
- Photos: only approved WRG images. Until then use `PhotoSlot`. Do not commit images with unconfirmed rights (the repo is public).

## Where things live

- Data: `src/data/` — `site.ts` (company, offices, routes, `reviewMode`), `services.ts`, `projects.ts`, `articles.ts`, `faqs.ts`, `sitemap.ts`. Add a service/project/article by adding an object; pages, menu, footer and sitemap pick it up.
- Templates: `src/pages/services/[slug].astro`, `projects/[slug].astro`, `blog/[category]/[slug].astro`.
- Hand-written pages: home, about, reviews, careers, locations (each office page is its own file), contact, faqs, legal, thank-you, 404.
- Layout and shared UI: `src/layouts/BaseLayout.astro`, `src/components/`.
- Behavior: `src/scripts/site.ts` (menu: focus trap, Escape, inert, focus return; scroll engine: `data-cur`, `data-depth`, `.rv`, header tone).
- Styles: `src/styles/global.css` (tokens §1, components) and `src/styles/pages.css` (interior templates). Use tokens; don't hard-code colors.

## Design rules (see docs/design-system.md)

- No eyebrow text above headings. Put the section label as `<p class="eyebrow">` first inside the heading container; CSS moves it to the gutter on desktop and hides it below 1024 px. Card categories use `.topic`.
- Single-tone headings, flat surfaces, radii 6–20 px, rectangular buttons with inline icon, red only for Call now.
- No giant background words, no scroll-jacking, no pinned sections, no autoplay video.
- Recovery line: per-section `.cur`/`.cur-node` inside sections with `data-cur`; decorative and `aria-hidden`.
- Service cards grow on hover/focus; keep grid gaps ≥ 2× the growth per side so they never overlap.
- Accessibility: WCAG 2.2 AA, visible focus, ≥ 44 px targets, everything usable without JS and with reduced motion.

## Review mode

`PUBLIC_REVIEW_MODE` (default `true`, read at build time): noindex + blocking robots.txt + internal notes visible. Only the client's approval switches it to `false`.

## Deploy

Push to `main`; Hostinger rebuilds. Settings in `docs/deploy-hostinger.md`.
