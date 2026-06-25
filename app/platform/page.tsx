import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { WorkflowSteps } from '@/components/sections/Blocks';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Badge } from '@/components/ui/Badge';
import { ProductLogo } from '@/components/ui/ProductLogo';
import { buildMetadata } from '@/lib/seo';
import { products } from '@/data/products';

export const metadata = buildMetadata({
  title: 'Bloo Platform | Telemetry, SIEM & AI Security Ops',
  description:
    'One platform for Telemetry Intelligence: Datafabric memory, cloud SIEM, SynthAI investigation and Crucible autonomous response - on one datalake.',
  path: '/platform',
  keywords: ['security telemetry platform', 'cloud SIEM', 'autonomous SOC'],
});

export default function PlatformPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Platform', path: '/platform' }]} />
      <Hero
        eyebrow="THE PLATFORM"
        headline="One datalake. Memory, detection, investigation and"
        emphasis="response."
        sub="Bloo unifies the full security data lifecycle on a single system of record. Each product is powerful alone and compounding together  -  every layer reasons over the same full-fidelity truth, inside your own cloud."
        primaryCta={{ label: 'Request a demo', href: '/request-demo' }}
        secondaryCta={{ label: 'Talk to an expert', href: '/contact' }}
      />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="PRODUCTS"
            title="Four products, one system of record"
            intro="Start with the memory layer, or enter through detection, investigation or autonomous response. Everything runs on the same canonical telemetry."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {products.filter((p) => p.slug !== 'bloo-onprem-siem').map((p, i) => (
              <Reveal key={p.slug} delay={(i % 2) * 80}>
                <Card href={`/platform/${p.slug}`} className="group flex h-full flex-col">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <ProductLogo slug={p.slug} height={52} />
                      <p className="mt-2 text-sm text-secondary">{p.positioning}</p>
                    </div>
                  </div>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-body">{p.cardSummary ?? p.meta.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <Badge tone="muted">Pillar · {p.pillar}</Badge>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-secondary group-hover:text-bright">
                      View <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <WorkflowSteps
        eyebrow="HOW IT FITS TOGETHER"
        heading="Telemetry becomes intelligence, end to end"
        intro="Datafabric retains the truth; SIEM detects against it; SynthAI reasons over it; Crucible acts on it  -  with humans in command."
        steps={[
          { title: 'Datafabric', description: 'Captures and retains full-fidelity telemetry as canonical, machine-consumable memory.' },
          { title: 'Bloo SIEM', description: 'Runs 600+ streaming detections and Connected Signals triage on that memory.' },
          { title: 'SynthAI', description: 'Turns plain-English questions into evidence-backed, auditable investigations.' },
          { title: 'Crucible', description: 'Investigates every signal with specialist agents and proposes response.' },
          { title: 'Your team', description: 'Approves consequential actions and feeds judgment back into the system.' },
        ]}
      />

      <Section>
        <Container className="text-center">
          <SectionHeading
            align="center"
            eyebrow="DEPLOYMENT"
            title="Your cloud, your data, your control"
            intro="Bloo deploys inside your own cloud or bare metal. Choose cloud-native SaaS or fully sovereign Bare Metal  -  the same platform, the same control."
            className="mb-10"
          />
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/platform/bloo-vantage" className="rounded-sm border border-border bg-surface px-5 py-3 text-sm font-bold text-body transition-colors hover:border-secondary/60 hover:text-bright">
              Cloud (SaaS)
            </Link>
            <Link href="/platform/bloo-onprem-siem" className="rounded-sm border border-border bg-surface px-5 py-3 text-sm font-bold text-body transition-colors hover:border-secondary/60 hover:text-bright">
              Bare Metal
            </Link>
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
