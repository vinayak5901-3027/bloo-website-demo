# QA / launch checklist

Status reflects local verification against `npm run dev` and `npm run build`. Re-run on the
production URL before go-live.

## Build & functionality

- [x] `next build` succeeds — 44 routes, no type errors
- [x] All 33 sampled routes return HTTP 200; unknown route returns 404 with custom page
- [x] Header dropdowns open/close (hover, click, Escape, click-outside) and are keyboard-navigable
- [x] Mobile menu toggles, locks scroll, closes on navigation
- [x] Forms (demo, contact, newsletter) validate and show success states
- [x] Cookie consent banner appears once and persists choice (localStorage)
- [x] Sticky mobile CTA appears on scroll, hidden on legal/form pages
- [x] Internal links resolve (nav, footer, in-article, related products)

## SEO

- [x] Unique `<title>` ≤60 chars on every page
- [x] Meta description ≤155 chars on every page
- [x] Exactly one `<h1>` per page
- [x] Self-referencing canonical on every page
- [x] Open Graph + Twitter card tags present
- [x] JSON-LD present and valid (Organization, WebSite, Breadcrumb, Product, FAQ, Article, JobPosting, Person…)
- [x] `sitemap.xml` lists all 37 indexable URLs
- [x] `robots.txt` allows crawl, references sitemap, welcomes AI crawlers
- [x] Dynamic OG image renders (1200×630 PNG)
- [ ] Submit sitemap to Google Search Console (post-deploy)
- [ ] Validate in Rich Results Test on the live URL (post-deploy)

## Accessibility (WCAG 2.1 AA)

- [x] Semantic landmarks: `header`, `main#main`, `footer`, labelled `nav`
- [x] Skip link to main content
- [x] Visible `:focus-visible` states everywhere
- [x] Color contrast: body 14:1, emphasis blue & gold pass AA on dark
- [x] 44px minimum touch targets
- [x] Icon-only controls have `aria-label`; decorative icons `aria-hidden`
- [x] Forms: labels, `aria-invalid`, `aria-describedby`, `role="alert"` errors
- [x] `prefers-reduced-motion` disables animation
- [ ] Screen-reader smoke test (NVDA/VoiceOver) on the live URL (recommended)

## Performance

- [x] First Load JS ~95 kB (budget <200 kB)
- [x] Fonts self-hosted (woff2, `display: swap`) — no external request, no layout shift
- [x] Images via `next/image` with explicit dimensions (AVIF/WebP)
- [x] CSS-driven motion (no heavy animation library)
- [x] All pages statically prerendered
- [ ] Lighthouse ≥90 (Perf/A11y/Best-Practices/SEO) on production URL (post-deploy)
- [ ] Confirm Core Web Vitals (LCP/INP/CLS) with field data (post-deploy)

## Compliance

- [x] Privacy Policy, Terms, Cookie Policy present (GDPR/CCPA/DPDPA-aware)
- [x] Cookie consent: Accept all / Reject non-essential, persisted
- [ ] Wire Google Consent Mode v2 to the banner if Google tags are added
- [ ] Legal review of policy copy before production

## Content integrity

- [x] No lorem ipsum, no empty sections, no "coming soon"
- [x] Product claims trace to datasheets / brand book
- [x] Customer names anonymized; case studies labelled representative
- [x] Leadership/roles labelled representative
