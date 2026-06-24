# Maintenance handbook & future enhancements

## Routine maintenance

| Cadence | Task |
|---|---|
| As needed | Edit copy in `data/*.ts`, add posts/case studies in `content/` (hot-reloads) |
| Monthly | Publish 1–2 blog posts linking up to product/solution pillars; review CWV in PSI |
| Monthly | `npm outdated` → patch/minor updates; re-run `npm run build` |
| Quarterly | Review IA & internal linking; refresh stats/proof points; prune stale content |
| Quarterly | Re-run the SEO validation pass (see `docs/SEO.md`) and the QA checklist |
| On dep release | Test Next.js minor upgrades on a branch before merging |

## Dependency notes

- Pinned: `next 14.2.x`, `react 18.3.x`, `tailwindcss 3.4.x`, `typescript 5.5.x`.
- Fonts are vendored in `fonts/` (from `@fontsource/lato`) and loaded via `next/font/local` —
  the build never needs network access to Google Fonts.
- `react-markdown` + `remark-gfm` render article Markdown; `gray-matter` parses frontmatter.

## Common tasks

- **Add a product/solution:** append an object to `data/products.ts` / `data/solutions.ts`; it gets
  a route, nav presence (add to `lib/site.ts`), sitemap entry and schema automatically.
- **Add a nav item:** edit `primaryNav` / `footerNav` in `lib/site.ts`.
- **Re-theme:** edit `:root` tokens in `app/globals.css`.
- **Change canonical domain:** set `NEXT_PUBLIC_SITE_URL`.

## Future enhancement recommendations

1. **Wire forms to a CRM** (HubSpot/Marketo or a serverless `/api/lead` route) and add spam
   protection (honeypot + rate limit or Turnstile).
2. **Analytics + consent mode** — add GA4 or a privacy-first analytics tool, gated by the existing
   cookie banner; implement Google Consent Mode v2.
3. **Search** — add site search over blog/case studies (the WebSite SearchAction schema already
   anticipates `/blog?q=`).
4. **Visual CMS** — point Decap or TinaCMS at `content/` and `data/` for non-developer editing.
5. **Real OG per page** — generate page-specific OG images (title-aware) via the `next/og` route.
6. **i18n / hreflang** — if expanding to APAC/EU locales, add `next-intl` and `hreflang` tags.
7. **Customer logos & live metrics** — replace representative trust signals with real logos/quotes
   and consider a status page integration on `/support`.
8. **Blog enhancements** — author pages (E-E-A-T), categories/tags, pagination, reading-progress,
   and a table of contents for long posts.
9. **Performance budgets in CI** — add Lighthouse CI to fail PRs that regress CWV or bundle size.
10. **A11y automation** — add `axe-core`/Playwright checks to CI alongside a manual screen-reader pass.

## Where things live (quick map)

- Theme tokens → `app/globals.css`
- Site config / nav → `lib/site.ts`
- Page content data → `data/*.ts`
- Articles → `content/*`
- SEO helpers / schema → `lib/seo.ts`, `lib/schema.ts`
- Components → `components/{ui,sections,layout,templates,seo}`
- Routes → `app/**`
