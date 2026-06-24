# SEO plan & validation

SEO is built in, not bolted on. Every page ships a unique title (≤60), meta description (≤155), one
H1 with the primary keyword, a self-referencing canonical, Open Graph + Twitter cards, and the
right JSON-LD.

## Keyword map (primary intent per page)

| Page | Primary keyword | Intent |
|---|---|---|
| `/` | telemetry intelligence platform | Commercial / brand |
| `/platform` | security telemetry platform | Commercial |
| `/platform/datafabric` | telemetry data fabric | Commercial |
| `/platform/bloo-siem` | cloud native SIEM | Commercial |
| `/platform/bloo-onprem-siem` | on premise SIEM | Commercial |
| `/platform/synthai` | AI security analytics copilot | Commercial |
| `/platform/crucible` | autonomous AI SOC platform | Commercial |
| `/solutions/threat-detection` | threat detection and response | Commercial |
| `/solutions/compliance-monitoring` | compliance monitoring platform | Commercial |
| `/solutions/soc-automation` | SOC automation platform | Commercial |
| `/solutions/siem-modernization` | SIEM replacement and modernization | Commercial |
| `/solutions/managed-security-services` | MSSP MDR security platform | Commercial |
| `/industries` | cybersecurity by industry | Commercial |
| `/blog/telemetry-is-not-exhaust` | telemetry as enterprise memory | Informational |
| `/blog/true-cost-of-siem-ingestion-pricing` | SIEM ingestion pricing cost | Informational |
| `/blog/alert-triage-automation-guide` | alert triage automation | Informational |
| `/blog/ai-soc-human-oversight` | autonomous SOC human oversight | Informational |
| `/case-studies/*` | SIEM cost reduction / healthcare detection / SOC automation case study | Commercial proof |

Secondary/long-tail terms (full-fidelity logging, hot retention, no ingestion penalties, MITRE
ATT&CK, Connected Signals, 600+ detection workbooks, MTTR, TCO) are woven into body copy naturally.

## On-page implementation

- **Metadata**: centralised in `lib/seo.ts` → `buildMetadata()` (absolute titles, canonical, OG,
  Twitter, robots). Product/solution titles come from `data/*.ts` `meta`.
- **Headings**: exactly one `<h1>`/page; logical `h2`/`h3`, never skipped.
- **Internal linking**: header/footer nav, related-product blocks, in-article contextual links
  (3–12 per article, descriptive anchors — no "click here").
- **Images**: `next/image` (AVIF/WebP), explicit width/height, lazy below the fold, descriptive alt.
- **URLs**: short, hyphenated, keyword-bearing; click depth ≤2 to money pages.

## Structured data (JSON-LD) inventory

| Type | Where |
|---|---|
| `Organization`, `WebSite` (+ SearchAction) | Site-wide (root layout) |
| `BreadcrumbList` | Every page except home |
| `SoftwareApplication` (+ Offer, Brand) | Product pages |
| `FAQPage` | Home, product pages, support, pricing |
| `BlogPosting` / `Blog` | Blog posts / blog index |
| `Article` / `CollectionPage` | Case studies / case-study index |
| `JobPosting` | Careers |
| `Person` | Leadership |
| `AboutPage`, `ContactPage`, `ItemList`, `WebPage` | About, contact, industries/listings, legal |

> Note: FAQ rich results are limited to gov/health sites; here the value is **AI-citation** (GEO)
> and content clarity, which is why FAQ blocks lead with direct, quotable answers.

## Technical SEO

- `app/sitemap.ts` → `sitemap.xml` (all 37 indexable URLs, lastmod, changefreq, priority).
- `app/robots.ts` → `robots.txt` (allow all, disallow `/api/`, explicit allow for GPTBot,
  ClaudeBot, PerplexityBot, Google-Extended; references the sitemap; sets host).
- `app/manifest.ts` → PWA manifest. Dynamic OG image at `/opengraph-image` (1200×630 PNG).
- Security headers in `next.config.mjs` (HSTS, X-Content-Type-Options, Referrer-Policy, etc.).
- All pages statically prerendered (content present in initial HTML — fully crawlable).

## GEO (AI-search visibility)

- Answer-first intros on every article and FAQ (40–60 word quotable blocks).
- Clear entity definition of Bloo on home + about (plain-text "Bloo is …").
- Tables and stats throughout (cited disproportionately by AI answers).
- AI crawlers explicitly allowed in `robots.txt`.

## Validation results (local, `npm run dev`)

| Check | Result |
|---|---|
| All routes return 200 (404 page returns 404) | ✅ |
| Exactly one `<h1>` per page | ✅ (all 33 sampled) |
| Title ≤60 chars, unique | ✅ (longest 57) |
| Meta description ≤155 chars | ✅ (longest 153) |
| Canonical on every page | ✅ |
| Open Graph (9 tags) + Twitter (5 tags) | ✅ |
| JSON-LD parses as valid JSON | ✅ (5/5 on product page) |
| `robots.txt` references sitemap + AI crawlers | ✅ |
| `sitemap.xml` lists 37 URLs | ✅ |
| OG image renders (image/png, 1200×630) | ✅ |
| Production build (`next build`) | ✅ 44 routes, ~95 kB First Load JS |

## Recommended post-launch SEO steps

1. Verify the domain in Google Search Console and submit `sitemap.xml`.
2. Confirm Core Web Vitals (LCP/INP/CLS) with field data via CrUX/PageSpeed Insights.
3. Set up GA4 with consent mode v2 wired to the cookie banner.
4. Expand the topic cluster (more blog posts linking up to product/solution pillars).
5. Pursue earned mentions and consistent entity facts (LinkedIn, Crunchbase) for E-E-A-T.

Reference cheat sheet: `/home/vinayakb/Downloads/SEO-Audit-Cheat-Sheet.md`.
