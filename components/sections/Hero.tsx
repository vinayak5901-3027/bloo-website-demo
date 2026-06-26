import clsx from 'clsx';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Section';
import type { Cta } from '@/data/types';

/** Decorative dark-cyber background: faint grid + brand glow. Purely visual. */
export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint bg-[size:56px_56px] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-secondary/20 blur-[120px]" />
      <div className="absolute -top-20 right-[8%] h-72 w-72 rounded-full bg-primary/30 blur-[100px]" />
    </div>
  );
}

/** Render a headline with an optional italic, emphasis-colored trailing phrase. */
export function Headline({
  text,
  emphasis,
  className,
  as: Tag = 'h1',
}: {
  text: string;
  emphasis?: string;
  className?: string;
  as?: 'h1' | 'h2';
}) {
  const Comp = Tag;
  // Weight/size come from the global type spec (H1 = Lato Light 300, H2 = 400);
  // the emphasis noun stays italic + signal, matching that weight.
  return (
    <Comp className={clsx('display-title tracking-tightish text-bright', className)}>
      {text}
      {emphasis && (
        <>
          {' '}
          <span className="italic text-emphasis">{emphasis}</span>
        </>
      )}
    </Comp>
  );
}

export function Hero({
  eyebrow,
  headline,
  emphasis,
  sub,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  children,
}: {
  eyebrow: string;
  headline: string;
  emphasis?: string;
  sub: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  tertiaryCta?: Cta;
  /** Optional right-column visual. */
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border pt-[calc(var(--header-height)+3.5rem)] pb-16 sm:pb-20 lg:pb-24">
      <HeroBackdrop />
      <div className="container-bloo relative">
        <div className={clsx('grid items-center gap-12', children && 'lg:grid-cols-12')}>
          <div className={clsx(children ? 'lg:col-span-6' : 'max-w-4xl')}>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Headline text={headline} emphasis={emphasis} className="text-balance" />
            <p className="subtitle mt-6 max-w-2xl">{sub}</p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                {primaryCta && (
                  <Button href={primaryCta.href} variant="accent" size="md" withArrow className="lg:px-7 lg:py-3.5 lg:text-base">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="ghost" size="md" className="lg:px-7 lg:py-3.5 lg:text-base">
                    {secondaryCta.label}
                  </Button>
                )}
                {tertiaryCta && (
                  <Button href={tertiaryCta.href} variant="ghost" size="md" className="lg:px-7 lg:py-3.5 lg:text-base border-secondary/40 text-secondary hover:bg-secondary/10">
                    {tertiaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
          {children && <div className="lg:col-span-6">{children}</div>}
        </div>
      </div>
    </section>
  );
}
