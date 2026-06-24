import { Check } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { StatsBand } from '@/components/sections/Blocks';
import { FaqSection } from '@/components/sections/FaqSection';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import clsx from 'clsx';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Pricing | Bloo',
  description:
    'Predictable, ingest-free pricing that scales with retention time, not data volume. Cloud SaaS, sovereign on-prem, or the full platform  -  talk to sales.',
  path: '/pricing',
  keywords: ['SIEM pricing', 'security platform pricing'],
});

const plans = [
  {
    name: 'Bloo SIEM',
    tag: 'Cloud · SaaS',
    summary: 'Cloud-native detection, user analytics and automation on a managed datalake.',
    features: [
      'Cloud-scale datalake  -  no DB admins',
      '365-day hot retention minimum (to 120 months)',
      '600+ detection workbooks + SOAR playbooks',
      'Connected Signals triage',
      'Native cloud & app connectors',
      'SaaS regions: USA, Mumbai',
    ],
    featured: false,
  },
  {
    name: 'Bloo Platform',
    tag: 'Most complete',
    summary: 'The full system of record  -  Datafabric memory, SIEM, SynthAI and Crucible together.',
    features: [
      'Everything in Bloo SIEM',
      'Datafabric memory layer',
      'SynthAI conversational analytics',
      'Crucible autonomous AI SOC',
      '1,200+ integrations',
      'Bring-your-own AI (5 providers)',
    ],
    featured: true,
  },
  {
    name: 'Bloo On-Prem SIEM',
    tag: 'Sovereign',
    summary: 'The full pipeline inside your own bare metal  -  no data forwarded.',
    features: [
      'Runs entirely in your bare metal',
      'Up to 98% compression',
      'Per-device, predictable pricing',
      'Auto-recovery & master configuration',
      'Open Analytics workbench',
      'Air-gap & local-AI ready',
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Pricing', path: '/pricing' }]} />
      <Hero
        eyebrow="PRICING"
        headline="Predictable economics, by"
        emphasis="construction."
        sub="A system of record must encourage complete truth, not selective logging. Bloo pricing scales with retention time, not ingestion volume  -  so logging everything never triggers a penalty or a surprise bill."
        primaryCta={{ label: 'Get a quote', href: '/request-demo' }}
        secondaryCta={{ label: 'Talk to sales', href: '/contact' }}
      />

      <StatsBand
        heading="What predictable pricing buys you"
        items={[
          { value: '0', label: 'Ingestion penalties', sub: 'Log every source you need', tone: 'accent' },
          { value: 'Up to 98%', label: 'Compression', sub: 'More data on the same footprint' },
          { value: '60%', label: 'Lower composite cost', sub: 'Below typical on-prem deployments' },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="PLANS"
            title="Choose how you deploy"
            intro="Enterprise pricing is tailored to your sources, retention and deployment model. Every plan is quoted up front  -  no metered surprises."
            className="mb-12"
          />
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {plans.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 70}>
                <div
                  className={clsx(
                    'flex h-full flex-col rounded-lg border p-7',
                    p.featured ? 'border-accent/60 bg-gradient-brand-soft shadow-glow' : 'border-border bg-surface/60',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-bright">{p.name}</h2>
                    <Badge tone={p.featured ? 'accent' : 'muted'}>{p.tag}</Badge>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
                  <div className="mt-5">
                    <span className="text-2xl font-black text-bright">Custom</span>
                    <span className="ml-1.5 text-sm text-muted">· quoted up front</span>
                  </div>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-body">
                        <Check size={16} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    href="/request-demo"
                    variant={p.featured ? 'accent' : 'ghost'}
                    size="md"
                    className="mt-7 w-full"
                  >
                    Get a quote
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FaqSection
        alt
        eyebrow="PRICING FAQ"
        heading="How Bloo pricing works"
        faqs={[
          { q: 'Do you charge by data ingested?', a: 'No. Pricing scales with retention time, not ingestion volume. A system of record must encourage complete truth, not selective logging  -  so you are never penalized for logging more sources.' },
          { q: 'How is Bloo cheaper than legacy SIEMs?', a: 'Up to 98% compression cuts storage, and consolidating SIEM, user analytics and automation into one platform removes overlapping licenses  -  landing composite cost roughly 60% below typical on-prem deployments.' },
          { q: 'What does On-Prem pricing look like?', a: 'Bloo On-Prem is licensed per device with predictable, unlimited per-device use  -  three capabilities at the price of one, with no ingestion metering.' },
          { q: 'Can I start with one product and expand?', a: 'Yes. Start with Bloo SIEM or the Datafabric memory layer and add SynthAI and Crucible as you grow  -  everything runs on the same system of record.' },
        ]}
      />

      <CtaBand headline="Get pricing tailored to your" emphasis="environment." primaryLabel="Get a quote" secondaryLabel="Talk to sales" />
    </>
  );
}
