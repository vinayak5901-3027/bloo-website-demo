import clsx from 'clsx';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { FeatureCard } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { Check } from 'lucide-react';
import type { Feature, Stat, Step, TableRow } from '@/data/types';

/* ───────────────────────────────── Stats band */
export function StatsBand({
  eyebrow,
  heading,
  items,
  alt = true,
  dividerAfter,
}: {
  eyebrow?: string;
  heading?: string;
  items: Stat[];
  alt?: boolean;
  dividerAfter?: number;
}) {
  return (
    <Section alt={alt}>
      <Container>
        {(eyebrow || heading) && (
          <SectionHeading eyebrow={eyebrow} title={heading} align="center" className="mb-12" />
        )}
        <div
          className="overflow-hidden rounded-lg border border-border"
          style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, 200px), 1fr))` }}
        >
          {items.map((s, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className={clsx(
                'bg-bg p-7 text-center sm:text-left',
                i > 0 && 'border-t-2 border-secondary/40 sm:border-t-0 sm:border-l-2 sm:border-secondary/40',
              )}
            >
              <div
                className={clsx(
                  'font-black leading-none tracking-tightish',
                  s.tone === 'accent' ? 'text-emphasis' : 'text-bright',
                  'text-3xl',
                )}
              >
                {s.value}
              </div>
              <div className="mt-3 text-sm font-bold text-bright">{s.label}</div>
              {s.sub && <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.sub}</p>}
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────────────── Feature grid */
export function FeatureGrid({
  eyebrow,
  heading,
  intro,
  items,
  alt = false,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  items: Feature[];
  alt?: boolean;
}) {
  return (
    <Section alt={alt}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={heading} intro={intro} />
        <div className="cards-carousel mt-12">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 70}>
              <FeatureCard icon={f.icon} title={f.title} description={f.description} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────────────── Problem section (PAS-B) */
export function ProblemSection({
  eyebrow,
  heading,
  intro,
  points,
  alt = false,
}: {
  eyebrow: string;
  heading: string;
  intro: string;
  points: { title: string; description: string }[];
  alt?: boolean;
}) {
  return (
    <Section alt={alt}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={heading} intro={intro} />
        <div className="cards-carousel mt-12">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 70}>
              <div className="h-full rounded-md border border-border bg-surface/60 p-6">
                <span className="font-mono text-sm text-accent">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 font-bold text-bright">{p.title}</h3>
                <p className="mt-2 text-body leading-relaxed">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────────────── Workflow steps */
export function WorkflowSteps({
  eyebrow,
  heading,
  intro,
  steps,
  alt = true,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  steps: Step[];
  alt?: boolean;
}) {
  return (
    <Section alt={alt}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={heading} intro={intro} />
        <ol className="cards-carousel mt-12">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 60} as="li" className="relative h-full">
              <div className="flex h-full flex-col rounded-md border border-border bg-bg p-5">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-sm font-black text-white">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && <span className="h-px flex-1 bg-border" aria-hidden="true" />}
                </div>
                <h3 className="mt-4 font-bold text-bright">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

/* ───────────────────────────────── Capability table */
export function CapabilityTable({
  eyebrow,
  heading,
  intro,
  rows,
  alt = false,
}: {
  eyebrow: string;
  heading: string;
  intro?: string;
  rows: TableRow[];
  alt?: boolean;
}) {
  return (
    <Section alt={alt}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={heading} intro={intro} />
        <div className="mt-10 overflow-hidden rounded-lg border border-border">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">{heading}</caption>
            <thead>
              <tr className="bg-surface">
                <th scope="col" className="w-1/3 px-5 py-3 font-mono text-xs uppercase tracking-widecaps text-muted">
                  Capability
                </th>
                <th scope="col" className="px-5 py-3 font-mono text-xs uppercase tracking-widecaps text-muted">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.capability} className="border-t border-border odd:bg-bg even:bg-surface/30">
                  <th scope="row" className="px-5 py-4 align-top text-sm font-bold text-bright">
                    {r.capability}
                  </th>
                  <td className="px-5 py-4 align-top text-sm leading-relaxed text-body">{r.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}

/* ───────────────────────────────── Highlights / checklist */
export function HighlightsList({
  eyebrow,
  heading,
  items,
  alt = true,
}: {
  eyebrow: string;
  heading: string;
  items: string[];
  alt?: boolean;
}) {
  return (
    <Section alt={alt}>
      <Container>
        <SectionHeading eyebrow={eyebrow} title={heading} />
        <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={i} as="li" delay={(i % 2) * 60} className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                <Check size={15} strokeWidth={2.5} aria-hidden="true" />
              </span>
              <span className="text-lg font-bold leading-relaxed text-body">{item}</span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
