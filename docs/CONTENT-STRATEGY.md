# Content strategy

## Voice (from the Bloo Brand Book)

Authoritative · precise · infrastructure-grade · conviction-led. No hype, no buzzwords. Every
section answers "what does this mean for me?" for CISOs, SOC managers, analysts, IT directors and
technical buyers.

**Style rules applied site-wide:** Oxford comma; sentence-case headings; spell out one–nine,
numerals 10+; `%` symbol; no exclamation marks in headings; no emoji; em dash with spaces. "Bloo"
always capital-B; "Telemetry Intelligence" as the category.

## Messaging pillars (every page maps to ≥1)

1. **Memory** — telemetry retained as long-term organizational memory.
2. **Reasoning** — maintained understanding, not ad-hoc queries.
3. **Control** — your cloud, your data, your governance.
4. **Predictability** — economics scale with time, not volume.
5. **Agents** — machine-consumable data so autonomous agents reason correctly.

## Content frameworks

- **Homepage:** outcome headline → how/for whom → proof → CTA. Sections: hero, trust strip, four
  pillars, proof stats, thesis, security flow, solutions, industries, latest research, testimonial,
  FAQ, CTA band.
- **Product / solution pages (PAS-B):** Problem → Agitate → Solution (feature → benefit) → Belief
  (proof/stats) → CTA. Each ends with FAQ + related products + CTA band.
- **Blog:** answer-first intro, descriptive H2s every ~250 words, a table/list where it compresses
  information, conclusion with a next step. 1,200–1,600 words.
- **Case studies:** Challenge → Solution → Results (numbers) → quote. Headline leads with the result.

## Page-by-page content map

| Section | Pages | Source of truth |
|---|---|---|
| Platform | overview + 5 products | `data/products.ts` |
| Solutions | overview + 5 solutions | `data/solutions.ts` |
| Industries | 1 page, 6 sectors | `data/industries.ts` |
| Company | about, leadership, careers, partners | `data/company.ts` + page copy |
| Blog | index + 4 posts | `content/blog/*.md` |
| Case studies | index + 3 studies | `content/case-studies/*.md` |
| Conversion | contact, request-demo | forms in `components/ui/LeadForm.tsx` |
| Legal | privacy, terms, cookie | `app/*/page.tsx` |

## Claims & integrity

All product facts trace to the datasheets / brand book (compression up to 98%, 1–5 yr hot
retention, no ingestion penalties, 600+ detection workbooks, 1,200+ integrations, five AI
providers, etc.). Customer names are anonymized and case studies are labelled representative.
Leadership and open roles are representative. No fabricated awards or third-party certifications
beyond the company's own "SOC 2 Type II" framing.

## Editorial workflow for new content

1. Pick a target keyword + intent (see `docs/SEO.md` keyword map).
2. Add a Markdown file to `content/blog/` or `content/case-studies/` with the frontmatter shape in
   `docs/EDITING-GUIDE.md`.
3. Lead with a 40–60 word answer-first intro; use descriptive H2s; link up to a product/solution
   pillar and across to 2–3 siblings.
4. Save — the post auto-appears in its index, sitemap, and gets Article/BlogPosting schema.
