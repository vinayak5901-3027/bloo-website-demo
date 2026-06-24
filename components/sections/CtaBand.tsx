import { Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Headline } from './Hero';

/** Shared pre-footer CTA band. Appears at the end of every marketing page. */
export function CtaBand({
  eyebrow = 'GET STARTED',
  headline = 'See Bloo against your own',
  emphasis = 'telemetry.',
  sub = 'Book a 30-minute walkthrough tailored to your stack  -  we will map your use cases and estimate your TCO.',
  primaryLabel = 'Request a demo',
  secondaryLabel = 'Talk to an expert',
  primaryHref = '/request-demo',
  secondaryHref = '/contact',
}: {
  eyebrow?: string;
  headline?: string;
  emphasis?: string;
  sub?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  primaryHref?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-brand opacity-[0.14]" />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/2 h-80 w-[760px] -translate-x-1/2 rounded-full bg-secondary/25 blur-[120px]"
      />
      <Container className="relative py-20 text-center lg:py-28">
        <p className="eyebrow justify-center">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </p>
        <Headline
          as="h2"
          text={headline}
          emphasis={emphasis}
          className="mx-auto mt-4 max-w-2xl text-balance"
        />
        <p className="subtitle mx-auto mt-5 max-w-xl">{sub}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={primaryHref} variant="accent" size="lg" withArrow>
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="ghost" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
