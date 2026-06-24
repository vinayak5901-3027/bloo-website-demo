# Design system

The system is token-driven. Colors live as editable CSS custom properties in `app/globals.css`
(`:root`) and are wired into Tailwind via `tailwind.config.ts`, so re-theming is a single-file edit.

## Color tokens

Stored as `R G B` channel triplets so Tailwind opacity utilities work (e.g. `bg-primary/20`).

| Token (CSS var) | Tailwind | Hex | Use |
|---|---|---|---|
| `--c-primary` | `primary` | `#00438D` | Brand core, gradients, headings accents |
| `--c-secondary` | `secondary` | `#005BC5` | Links, interactive, secondary emphasis |
| `--c-accent` | `accent` | `#FFC500` | **CTAs / key callouts only** — kept scarce |
| `--c-bg` | `bg` | `#050D1A` | Page background (dark navy) |
| `--c-surface` | `surface` | `#0B1830` | Cards, panels |
| `--c-surface-2` | `surface-2` | `#122446` | Elevated / hover |
| `--c-border` | `border` | `#1C3258` | Borders, dividers |
| `--c-text` | `body` | `#DCE6F5` | Body text |
| `--c-text-bright` | `bright` | `#FFFFFF` | Headlines |
| `--c-text-muted` | `muted` | `#8FA5C8` | Captions, meta |
| `--c-info` | `emphasis` / `info` | `#4DA3FF` | Headline emphasis word (AA-contrast on dark) |
| `--c-success` | `success` | `#2DD4A7` | Success states, checkmarks |
| `--c-error` | `error` | `#FF5C5C` | Errors |

**Gradient:** `bg-gradient-brand` (135°, primary→secondary). Used on fills/decoration only — never
on text (brand rule).

**Contrast notes:** Brand blue `#005BC5` is too dark for text on `#050D1A`, so headline emphasis
uses the brighter `emphasis` blue (`#4DA3FF`, passes AA). Gold `#FFC500` passes AA on dark and is
reserved for CTAs. Body `#DCE6F5` on `#050D1A` ≈ 14:1.

## Typography

- **Lato** only (self-hosted woff2 via `next/font/local`, weights 400/700/900 + italics,
  `display: swap` → no layout shift, no external request).
- H1 brand rule: bold; the emphasis phrase is bold **italic** in the emphasis blue.
- Scale (1.25 major third): `xs 12 · sm 14 · base 16 · md 17 · lg 18 · xl 20 · 2xl 24 · 3xl 30 ·
  4xl 36 · 5xl 48 · 6xl 60 · 7xl 72`.
- Body line-height 1.65; headings 1.05–1.2 with `-0.015em` tracking and `text-wrap: balance`.
- Mono (`font-mono`) reserved for eyebrows, metadata, table heads, stat units, code.

## Spacing, radius, elevation

- 4px base unit (Tailwind default scale). Section padding `py-16 → py-28`.
- Container max-width **1200px** (`max-w-container`).
- Radius: `sm 6px` (buttons/inputs), `md 8px` (cards), `lg 16px` (panels), `xl 24px`.
- Shadows: `shadow-1/2/3` (dark-tuned), plus `shadow-glow` and `shadow-accent-glow` for brand
  moments only.

## Motion

- CSS-only (no animation library — protects the JS budget).
- Easing `cubic-bezier(0.22,1,0.36,1)` (`ease-brand`); durations 150–250ms for micro-interactions,
  ~600ms for scroll reveals.
- `Reveal` component uses IntersectionObserver to add `.is-visible`.
- **All motion is disabled under `prefers-reduced-motion: reduce`.**

## Component inventory

| Component | File | Notes |
|---|---|---|
| Button | `components/ui/Button.tsx` | `accent` / `primary` / `ghost` / `secondary` × `md`/`lg`, optional arrow, ≥44px target |
| Card / FeatureCard / LinkCard | `components/ui/Card.tsx` | hover lift, icon variants |
| Badge | `components/ui/Badge.tsx` | `accent`/`secondary`/`success`/`muted`, optional pulse dot |
| Icon | `components/ui/Icon.tsx` | Lucide registry, 24px grid, 1.75 stroke |
| Section / Container / Eyebrow / SectionHeading | `components/ui/Section.tsx` | layout primitives |
| Reveal | `components/ui/Reveal.tsx` | scroll-in animation |
| Hero / HeroBackdrop / Headline | `components/sections/Hero.tsx` | grid + glow backdrop, emphasis headline |
| StatsBand / FeatureGrid / ProblemSection / WorkflowSteps / CapabilityTable / HighlightsList | `components/sections/Blocks.tsx` | data-driven blocks |
| FaqSection | `components/sections/FaqSection.tsx` | `<details>` accordion + FAQPage JSON-LD |
| CtaBand | `components/sections/CtaBand.tsx` | pre-footer CTA |
| TrustStrip / RelatedProducts | `components/sections/Trust.tsx` | trust signals, cross-links |
| Header / Footer / StickyCta / CookieConsent | `components/layout/*` | site chrome |
| LeadForm / NewsletterForm | `components/ui/*` | client validation + success states |
| Markdown | `components/ui/Markdown.tsx` | react-markdown + GFM → `.prose-bloo` |
| JsonLd / Breadcrumbs | `components/seo/*` | structured data |

## Accessibility rules baked in

- Semantic landmarks: `<header>`, `<main id="main">`, `<footer>`, `<nav aria-label>`.
- Skip link first in the body.
- Dropdowns: `aria-expanded`/`aria-haspopup`, Escape to close, click-outside to close.
- Visible `:focus-visible` outline (2px accent) everywhere.
- 44px minimum touch targets; descriptive `aria-label`s on icon-only controls.
- Forms: labelled inputs, `aria-invalid`, `aria-describedby`, `role="alert"` errors.
- Decorative icons `aria-hidden`; informative images have descriptive `alt`.
