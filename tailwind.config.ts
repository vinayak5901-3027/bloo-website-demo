import type { Config } from 'tailwindcss';

/**
 * Bloo  -  New-Demo-0.1 Tailwind theme.
 * Colors are driven by CSS custom properties (RGB channel triplets) defined in
 * app/globals.css so the entire palette is editable in ONE place without code
 * changes. Each token supports Tailwind's <alpha-value> for opacity utilities.
 */
const withVar = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: withVar('--c-primary'), // #1A3A6B chakra  -  dataviz / dark gradients
        secondary: withVar('--c-secondary'), // signal (#6FE3C8 ink / #1E8A74 paper)
        accent: withVar('--c-accent'), // signal  -  the one earned color, scarce
        bg: withVar('--c-bg'), // page surface (ink / paper)
        'bg-soft': withVar('--c-bg-soft'), // alt section surface
        surface: withVar('--c-surface'), // cards/panels
        'surface-2': withVar('--c-surface-2'), // elevated/hover/icon tiles
        border: withVar('--c-border'), // the hairline rule
        body: withVar('--c-text'), // body text
        bright: withVar('--c-text-bright'), // headlines (paper / ink)
        muted: withVar('--c-text-muted'), // captions/meta
        success: withVar('--c-success'),
        warning: withVar('--c-amber'), // caution / regulatory
        amber: withVar('--c-amber'), // adversary / attacker-side facts
        error: withVar('--c-error'),
        info: withVar('--c-info'),
        // Headline noun + key stat  -  signal (cyan on ink, teal on paper).
        emphasis: withVar('--c-info'),
      },
      fontFamily: {
        sans: ['var(--font-lato)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        // Utility scale
        xs:   ['0.75rem',    { lineHeight: '1.4' }],   //  12px
        sm:   ['0.875rem',   { lineHeight: '1.5' }],   //  14px
        base: ['1rem',       { lineHeight: '1.6' }],   //  16px

        // ── Page / Section scale (clamp desktop maxima) ──────────
        // Body / Para / Desc / Quotes / Bullets  -  18px max · Lato Light
        desc:    ['clamp(1rem,1.5vw,1.125rem)',   { lineHeight: '1.7' }],  //  16→18px
        para:    ['clamp(1rem,1.5vw,1.125rem)',   { lineHeight: '1.7' }],  //  16→18px
        quote:   ['clamp(1rem,1.5vw,1.125rem)',   { lineHeight: '1.6' }],  //  16→18px
        // Eyebrow / Mono / Code  -  14px max · JetBrains Mono
        eyebrow: ['clamp(0.75rem,1vw,0.875rem)',  { lineHeight: '1.6' }],  //  12→14px
        // H4 / H5 / H6  -  22px max · Lato Regular · lh 1.35
        h456:    ['1.375rem',  { lineHeight: '1.35' }],  //  22px
        // H3  -  27px max · Lato Regular · lh 1.3
        h3:      ['1.6875rem', { lineHeight: '1.3'  }],  //  27px
        // H2  -  32px max · Lato Regular · lh 1.25
        h2:      ['2rem',      { lineHeight: '1.25' }],  //  32px
        // H1  -  37px max · Lato Regular · lh 1.2
        h1:      ['2.3125rem', { lineHeight: '1.2'  }],  //  37px
        // Title / Hero  -  42px max · Lato Light · lh 1.2
        hero:    ['2.625rem',  { lineHeight: '1.2'  }],  //  42px

        // ── Card scale (clamp desktop maxima) ─────────────────────
        // Card body / desc / quotes  -  14px max · Lato Light · lh 1.6
        'card-body':   ['clamp(0.8125rem,1.3vw,0.875rem)',  { lineHeight: '1.6' }],  //  13→14px
        'card-quote':  ['clamp(0.8125rem,1.2vw,0.875rem)',  { lineHeight: '1.6' }],  //  13→14px
        // Card eyebrow / code  -  12px max · JetBrains Mono
        'card-mono':   ['clamp(0.6875rem,1vw,0.75rem)',     { lineHeight: '1.5' }],  //  11→12px
        // Card H4/H5/H6  -  16px · Regular
        'card-h456':   ['1rem',      { lineHeight: '1.4' }],  //  16px
        // Card H3  -  18px · Regular
        'card-h3':     ['1.125rem',  { lineHeight: '1.4' }],  //  18px
        // Card H2  -  20px · Regular
        'card-h2':     ['1.25rem',   { lineHeight: '1.35'}],  //  20px
        // Card H1  -  26px · Regular
        'card-h1':     ['1.625rem',  { lineHeight: '1.3' }],  //  26px
        // Card title  -  30px · Lato Light
        'card-title':  ['1.875rem',  { lineHeight: '1.3' }],  //  30px

        // Legacy aliases kept so existing Tailwind utilities still compile
        md:   ['1.25rem',    { lineHeight: '1.6'  }],  //  20px  (= para)
        lg:   ['1.5rem',     { lineHeight: '1.45' }],  //  24px
        xl:   ['1.875rem',   { lineHeight: '1.4'  }],  //  30px
        '2xl':['2.5rem',     { lineHeight: '1.3'  }],  //  40px
        '3xl':['3.125rem',   { lineHeight: '1.2'  }],  //  50px
        '4xl':['3.75rem',    { lineHeight: '1.15' }],  //  60px
        '5xl':['3rem',       { lineHeight: '1.1'  }],
        '6xl':['3.75rem',    { lineHeight: '1.05' }],
        '7xl':['4.5rem',     { lineHeight: '1.02' }],
      },
      maxWidth: {
        container: '1200px',
        prose: '70ch',
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        // Soft, ink-based elevation  -  gentle in both rooms ("hairline before fill").
        1: '0 1px 2px rgba(11,18,32,0.10), 0 1px 3px rgba(11,18,32,0.08)',
        2: '0 4px 16px rgba(11,18,32,0.12)',
        3: '0 24px 48px rgba(11,18,32,0.20)',
        // Signal glow  -  the brand's one accent moment.
        glow: '0 0 0 1px rgba(111,227,200,0.35), 0 0 48px rgba(111,227,200,0.18)',
        'accent-glow': '0 0 0 1px rgba(111,227,200,0.35), 0 0 40px rgba(111,227,200,0.16)',
      },
      letterSpacing: {
        tightish: '-0.015em',
        widecaps: '0.08em',
        widerc: '0.14em',
      },
      backgroundImage: {
        // Fixed dark chakra→ink gradient (white text always reads on it, both rooms).
        'gradient-brand': 'linear-gradient(135deg, #1A3A6B, #0B1220)',
        // Signal-tinted wash for icon tiles / feature panels.
        'gradient-brand-soft':
          'linear-gradient(135deg, rgba(111,227,200,0.16), rgba(26,58,107,0.10))',
        // Faint signal grid for hero/section backdrops  -  subtle in both rooms.
        'grid-faint':
          'linear-gradient(rgba(111,227,200,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(111,227,200,0.10) 1px, transparent 1px)',
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.35' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        marquee: 'marquee 38s linear infinite',
        'pulse-dot': 'pulse-dot 2.4s ease-in-out infinite',
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
