import { Hero } from '@/components/sections/Hero';
import {
  ProblemSection,
  StatsBand,
  FeatureGrid,
  WorkflowSteps,
  HighlightsList,
} from '@/components/sections/Blocks';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { RelatedProducts } from '@/components/sections/Trust';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Section';
import { productSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { getProduct } from '@/data/products';

export const metadata = buildMetadata({
  title: 'SynthAI | Conversational Security Analytics Agent',
  description:
    'SynthAI turns plain-English questions into validated, evidence-backed investigations — a deterministic 5-stage pipeline with full auditability.',
  path: '/platform/synthai',
  keywords: ['AI security analytics agent', 'Bloo', 'telemetry intelligence'],
});

export default function SynthAIPage() {
  const product = getProduct('synthai')!;
  const path = '/platform/synthai';

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
        tertiaryCta={{ label: 'Release Note V1.0', href: 'https://product-templates-v1-0.netlify.app/crucible/' }}
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

      <FaqSection faqs={product.faqs} heading={`${product.name}  -  questions, answered`} alt />

      <RelatedProducts slugs={product.related} />

      <CtaBand />
    </>
  );
}
