# Editing guide (CMS / content editing)

Everything content-facing is editable without touching component code. In `npm run dev`, every edit
hot-reloads instantly; no rebuild needed.

## Choosing the approach (and why)

We use **local typed data + Markdown**, not a hosted CMS, because it is the simplest maintainable
option for a marketing site of this size: zero infrastructure, version-controlled with the code,
type-checked, and instantly previewable. (The brief permitted Local MDX / Decap / Payload — local
content was chosen for simplicity and reliability.) To add a visual CMS later, point Decap/Tina at
the `content/` and `data/` folders.

## Edit brand colors, fonts, spacing

`app/globals.css` → the `:root` block. Change a hex (as `R G B` triplets) and the whole site
re-themes. Example — change the brand blue:

```css
--c-primary: 0 67 141;   /* #00438D → edit these three numbers */
```

Fonts: swap the woff2 files in `fonts/` and update `app/layout.tsx` (`localFont` src list).

## Edit navigation, footer, contact, social

`lib/site.ts`:
- `siteConfig` — name, URL, tagline, proof points, contact emails/phone/address, social links, logo.
- `primaryNav` — header menu (groups + dropdown children + overview link).
- `footerNav` / `legalNav` — footer columns and legal bar.

## Edit product / solution / industry pages

These are data-driven — edit the object, the page re-renders:
- `data/products.ts` — 5 platform products (hero, problem, stats, features, workflow, capabilities,
  highlights, FAQs, related, SEO `meta`).
- `data/solutions.ts` — 5 solutions.
- `data/industries.ts` — 6 industries.
- `data/company.ts` — leadership and open roles.

Icons are referenced by name (see the `IconName` union in `data/types.ts`, backed by Lucide in
`components/ui/Icon.tsx`).

## Add or edit a blog post

Create `content/blog/my-post.md`:

```markdown
---
title: "Sentence-case title (≤ ~56 chars)"
description: "One-sentence summary, ≤155 characters."
date: "2026-06-12"
author: "Author Name"
authorRole: "Their role"
category: "Thought leadership"
readingTime: "6 min read"
keyword: "primary keyword"
featured: false
---

A 40–60 word answer-first intro paragraph (no H1 — the page renders the title).

## A descriptive H2
Body copy. Link up to a [product](/platform/bloo-siem) and across to [siblings](/solutions/threat-detection).
```

Save → it appears on `/blog`, gets its own route, a sitemap entry and BlogPosting schema.

## Add or edit a case study

Create `content/case-studies/my-study.md`:

```markdown
---
title: "How a company achieved a measurable result"
description: "≤155-char summary."
industry: "Financial services"
customer: "An anonymized customer descriptor"
date: "2026-06-01"
keyword: "primary keyword"
metrics:
  - value: "62%"
    label: "Lower cost"
  - value: "5 years"
    label: "Hot retention"
  - value: "11 to 1"
    label: "Tools consolidated"
---

## Challenge
...
## Solution
...
## Results
Narrate the metrics (the tiles render from frontmatter).
```

## Edit a page's SEO

Each page has a `buildMetadata({ title, description, path, keywords })` call near the top — edit
those strings. For product/solution pages, edit the `meta` block inside `data/*.ts`.

## Edit the OG social image

`app/opengraph-image.tsx` — pure JSX/inline styles, regenerated automatically.

## Forms

`components/ui/LeadForm.tsx` and `NewsletterForm.tsx` are demo-only (client validation + success
state). To make them live, replace the `setTimeout` submit with a `fetch` to your CRM / form
endpoint (e.g. HubSpot, a serverless route, or `/api/lead`).
