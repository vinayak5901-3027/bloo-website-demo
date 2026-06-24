# Bloo — New-Demo-0.1

A production-ready redesign of the Bloo website — **the system of record for Telemetry Intelligence**.
Built with Next.js (App Router), TypeScript and Tailwind CSS, preserving the legacy Bloo brand
(deep-blue authority, scarce gold CTA, Lato) while elevating UX, information architecture,
conversion, SEO, accessibility and performance.

> **Live preview:** http://localhost:3000 (run `npm run dev`)

---

## Quick start

```bash
cd New-Demo-0.1
npm install        # install dependencies (already installed in this workspace)
npm run dev        # start the dev server with live reload → http://localhost:3000
```

Other scripts:

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload at `http://localhost:3000` |
| `npm run build` | Production build (static / SSG) |
| `npm run start` | Serve the production build at `http://localhost:3000` |
| `npm run lint` | Run ESLint (next/core-web-vitals) |

**Requirements:** Node 18.17+ (built and verified on Node 24). No database, no external services —
everything renders statically.

---

## What's inside

- **35+ pages**, all statically prerendered: homepage, platform overview + 5 product pages,
  solutions overview + 5 solution pages, industries, resources, blog (index + 4 posts),
  case studies (index + 3 studies), about, leadership, careers, partners, contact, request-demo,
  docs, integrations, support, pricing, and three legal pages + a custom 404.
- **Design system** driven by editable CSS tokens + a Tailwind theme (see `docs/DESIGN-SYSTEM.md`).
- **Editable content** — products/solutions/industries live in typed `data/*.ts`; blog and case
  studies are plain Markdown in `content/` (see `docs/EDITING-GUIDE.md`).
- **SEO baked in** — per-page metadata, canonical URLs, Open Graph + Twitter cards, a dynamic OG
  image, JSON-LD (Organization, WebSite, Breadcrumb, Product, FAQ, Article, JobPosting, Person…),
  `sitemap.xml`, `robots.txt` (AI crawlers welcomed) — see `docs/SEO.md`.
- **Accessible** — WCAG 2.1 AA: semantic landmarks, skip link, visible focus, keyboard-navigable
  menus, reduced-motion support, 44px touch targets, alt text, contrast-checked palette.
- **Fast** — self-hosted Lato (no layout shift), ~95 kB First Load JS, CSS-driven motion (no heavy
  animation library), images sized to avoid CLS.

---

## Project structure

```
New-Demo-0.1/
├── app/                      # Next.js App Router routes
│   ├── layout.tsx            # Root layout: fonts, metadata, header/footer, site JSON-LD
│   ├── page.tsx              # Homepage
│   ├── globals.css           # Design tokens (:root) + base styles + utilities
│   ├── platform/             # Platform overview + [slug] product pages
│   ├── solutions/            # Solutions overview + [slug] solution pages
│   ├── industries/, blog/, case-studies/, about/, leadership/, careers/, partners/,
│   ├── contact/, request-demo/, resources/, docs/, integrations/, support/, pricing/,
│   ├── privacy-policy/, terms/, cookie-policy/, not-found.tsx
│   ├── sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx
├── components/
│   ├── layout/               # Header, Footer, StickyCta, CookieConsent
│   ├── sections/             # Hero, Blocks (stats/features/workflow/table…), FaqSection, CtaBand, Trust
│   ├── templates/            # ProductPage, SolutionPage, LegalPage
│   ├── ui/                   # Button, Card, Badge, Icon, Reveal, Markdown, forms
│   └── seo/                  # JsonLd, Breadcrumbs
├── data/                     # Editable content: products, solutions, industries, company, types
├── content/                  # Markdown: blog/*.md, case-studies/*.md
├── lib/                      # site config, seo helper, schema builders, content loader
├── fonts/                    # Self-hosted Lato woff2
├── public/                   # logo, favicon, assets
└── docs/                     # Design system, SEO, content, workflows, deployment, editing, QA…
```

---

## Editing the site (no rebuild required in dev)

- **Brand colors / fonts:** edit the `:root` tokens in `app/globals.css`.
- **Navigation, footer, contact, social:** `lib/site.ts`.
- **Product / solution / industry copy:** `data/*.ts`.
- **Blog posts & case studies:** add or edit Markdown files in `content/` — they appear
  automatically with their own route, sitemap entry and schema.
- **SEO title/description per page:** the `buildMetadata({...})` call at the top of each page, or the
  `meta` block inside `data/*.ts`.

Full details: **`docs/EDITING-GUIDE.md`**.

---

## Documentation

| Doc | Contents |
|---|---|
| `docs/BRAND-ANALYSIS.md` | Old bloo.io vs brand-book analysis, comparison matrix, opportunities |
| `docs/DESIGN-SYSTEM.md` | Tokens, type scale, components, motion, accessibility rules |
| `docs/SEO.md` | Keyword map, on-page rules, schema inventory, validation results, GEO |
| `docs/CONTENT-STRATEGY.md` | Voice, messaging pillars, page-by-page content map |
| `docs/WORKFLOWS.md` | Product workflow diagrams + how the site was built |
| `docs/EDITING-GUIDE.md` | How to edit text, images, colors, nav, blog, SEO |
| `docs/DEPLOYMENT.md` | Build, host (Vercel/Node/static), env vars, headers |
| `docs/QA-CHECKLIST.md` | Pre-launch checklist with current pass/fail |
| `docs/MAINTENANCE.md` | Ongoing tasks + future enhancement recommendations |

---

## Brand & content sources

This redesign is built from the Bloo Brand Book (Feb 2026), the Bloo SIEM / On-Prem SIEM datasheets,
the SynthAI and Crucible feature documents, and the live bloo.io for visual continuity. All product
claims trace to those sources; customer names in case studies are anonymized and labelled
representative.
