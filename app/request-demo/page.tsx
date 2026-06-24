import { Check, Clock, Calculator, ListChecks } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { LeadForm } from '@/components/ui/LeadForm';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Request a Demo | Bloo',
  description:
    'Book a 30-minute walkthrough of Bloo tailored to your stack. We’ll map your use cases, show detection on real history, and estimate your TCO.',
  path: '/request-demo',
  keywords: ['request security platform demo', 'Bloo demo'],
});

const expect = [
  { icon: Clock, title: '30-minute walkthrough', text: 'A focused session with a solutions engineer  -  no slide marathon.' },
  { icon: ListChecks, title: 'Your use cases', text: 'We map Bloo to the outcomes you own: detection, retention, automation or compliance.' },
  { icon: Calculator, title: 'A TCO estimate', text: 'See how predictable, retention-time pricing compares to your current bill.' },
];

export default function RequestDemoPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Request a demo', path: '/request-demo' }]} />
      <Section className="pt-[calc(var(--header-height)+3rem)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>REQUEST A DEMO</Eyebrow>
              <h1 className="font-black tracking-tightish text-bright">
                See Bloo against your own <span className="italic text-emphasis">telemetry.</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Tell us a little about your environment and we’ll tailor a walkthrough to your stack.
                {` ${siteConfig.proof.coverage} expert coverage from day one.`}
              </p>

              <ul className="mt-10 space-y-5">
                {expect.map((e) => (
                  <li key={e.title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                      <e.icon size={22} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="font-bold text-bright">{e.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{e.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border">
                {[
                  { v: siteConfig.proof.compression, l: 'Compression' },
                  { v: siteConfig.proof.retention, l: 'Hot retention' },
                  { v: siteConfig.proof.costReduction, l: 'Lower cost' },
                ].map((s) => (
                  <div key={s.l} className="bg-bg p-4 text-center">
                    <div className="text-2xl font-black text-emphasis">{s.v}</div>
                    <div className="mt-2 text-sm text-muted">{s.l}</div>
                  </div>
                ))}
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm text-success">
                <Check size={16} aria-hidden="true" /> No obligation. No spam. Your data stays yours.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-surface/60 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-bright">Book your walkthrough</h2>
              <p className="mt-1.5 text-sm text-muted">A solutions engineer will reach out within one business day.</p>
              <div className="mt-6">
                <LeadForm variant="demo" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
