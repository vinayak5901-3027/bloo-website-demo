import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import {
  ProblemSection,
  StatsBand,
  FeatureGrid,
  WorkflowSteps,
  CapabilityTable,
  HighlightsList,
} from '@/components/sections/Blocks';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { RelatedProducts } from '@/components/sections/Trust';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Badge } from '@/components/ui/Badge';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { productSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { getProduct } from '@/data/products';

export const metadata = buildMetadata({
  title: 'Crucible | Autonomous AI SOC by Bloo',
  description:
    'Crucible investigates every signal with specialist AI agents, groups alerts into incidents, and proposes response  -  humans approve consequential actions.',
  path: '/platform/crucible',
  keywords: ['autonomous AI SOC platform', 'Bloo', 'telemetry intelligence'],
});

const integrationCategories = [
  { icon: 'shield', label: 'Endpoint & EDR', examples: 'CrowdStrike, SentinelOne, Defender' },
  { icon: 'cloud', label: 'Cloud Platforms', examples: 'AWS, Azure, GCP' },
  { icon: 'network', label: 'Network Security', examples: 'Palo Alto, Fortinet, Check Point' },
  { icon: 'lock', label: 'Identity & Access', examples: 'Okta, Entra ID, CyberArk' },
  { icon: 'fileCheck', label: 'Threat Intelligence', examples: 'VirusTotal, Recorded Future' },
  { icon: 'activity', label: 'SIEM & Analytics', examples: 'Splunk, Sentinel, Chronicle' },
  { icon: 'workflow', label: 'ITSM & Ticketing', examples: 'ServiceNow, Jira' },
  { icon: 'bot', label: 'Email Security', examples: 'Proofpoint, Mimecast, Abnormal' },
  { icon: 'database', label: 'Vulnerability Mgmt', examples: 'Qualys, Tenable, Rapid7' },
] as const;

export default function CruciblePage() {
  const product = getProduct('crucible')!;
  const path = '/platform/crucible';

  return (
    <>
      <JsonLd data={productSchema({ name: product.name, description: product.meta.description, path })} />
      <Breadcrumbs items={[{ name: 'Platform', path: '/platform' }, { name: product.name, path }]} />

      <Hero
        eyebrow={product.eyebrow}
        headline={product.hero.headline}
        emphasis={product.hero.headlineEmphasis}
        sub={product.hero.sub}
        primaryCta={{ label: 'Request a demo', href: '/request-demo' }}
        secondaryCta={{ label: 'Talk to an expert', href: '/contact' }}
        tertiaryCta={{ label: 'Release Note V1.0', href: 'https://product-templates-v1-0.netlify.app/synth-ai/' }}
      />

      {/* Pillar badge strip */}
      <div className="border-b border-border bg-surface/40">
        <Container className="flex flex-wrap items-center gap-3 py-4">
          <Badge tone="secondary">Narrative pillar · {product.pillar}</Badge>
          <Badge tone="muted">{product.positioning}</Badge>
        </Container>
      </div>

      {product.problem && (
        <ProblemSection
          eyebrow={product.problem.eyebrow}
          heading={product.problem.heading}
          intro={product.problem.intro}
          points={product.problem.points}
        />
      )}

      <StatsBand eyebrow={product.stats.eyebrow} heading={product.stats.heading} items={product.stats.items} />

      <FeatureGrid
        eyebrow={product.features.eyebrow}
        heading={product.features.heading}
        intro={product.features.intro}
        items={product.features.items}
      />

      {product.workflow && (
        <WorkflowSteps
          eyebrow={product.workflow.eyebrow}
          heading={product.workflow.heading}
          intro={product.workflow.intro}
          steps={product.workflow.steps}
          singleRow
        />
      )}

      {product.highlights && (
        <HighlightsList
          eyebrow={product.highlights.eyebrow}
          heading={product.highlights.heading}
          items={product.highlights.items}
          alt={!product.workflow}
        />
      )}

      {/* ───────────────── Integrations */}
      <Section alt>
        <Container>
          <SectionHeading
            eyebrow="INTEGRATIONS"
            title="Work with EVERYTHING You Need"
            intro="Seamless integration with security devices, operating systems, cloud workloads and applications."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-3 gap-5">
            {integrationCategories.map((cat, i) => (
              <Reveal key={cat.label} delay={(i % 3) * 60}>
                <div className="rounded-lg border border-border bg-surface/70 p-5 text-center transition-all duration-200 hover:border-secondary/40 hover:bg-surface-2">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                    <Icon name={cat.icon} size={22} />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-bright">{cat.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{cat.examples}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-muted">
              <span className="text-emphasis">1,200+</span> pre-built adapters across 15+ categories
            </p>
            <div className="mt-4">
              <Link href="/integrations" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-bright">
                View all integrations <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {product.capabilities && (
        <CapabilityTable
          eyebrow={product.capabilities.eyebrow}
          heading={product.capabilities.heading}
          intro={product.capabilities.intro}
          rows={product.capabilities.rows}
        />
      )}

      <FaqSection faqs={product.faqs} heading={`${product.name}  -  questions, answered`} alt />

      <RelatedProducts slugs={product.related} />

      <CtaBand />
    </>
  );
}
