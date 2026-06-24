import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { CtaBand } from '@/components/sections/CtaBand';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { getCaseStudies } from '@/lib/content';

export const metadata = buildMetadata({
  title: 'Case Studies | Bloo Customer Results',
  description:
    'Measurable results from security teams running Bloo  -  cost reduction, faster response, automated triage and audit-ready compliance across industries.',
  path: '/case-studies',
  keywords: ['security platform case studies', 'SIEM ROI', 'SOC automation results'],
});

export default function CaseStudiesIndex() {
  const studies = getCaseStudies();
  return (
    <>
      <Breadcrumbs items={[{ name: 'Case studies', path: '/case-studies' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Bloo Case Studies',
          url: `${siteConfig.url}/case-studies`,
          isPartOf: { '@id': `${siteConfig.url}/#website` },
        }}
      />
      <Section className="!pb-10">
        <Container>
          <Eyebrow>CUSTOMER RESULTS</Eyebrow>
          <h1 className="max-w-3xl font-black tracking-tightish text-bright">
            Outcomes security teams can{' '}
            <span className="italic text-emphasis">measure.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            How organizations cut cost, accelerated response, and proved compliance on the Bloo
            platform. Customers anonymized; results representative.
          </p>
        </Container>
      </Section>

      <Section className="!pt-0">
        <Container>
          <div className="cards-carousel">
            {studies.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 70}>
                <Card href={`/case-studies/${c.slug}`} className="group flex h-full flex-col">
                  <Badge tone="secondary">{c.frontmatter.industry}</Badge>
                  <h2 className="mt-4 font-bold leading-snug text-bright group-hover:text-bright">
                    {c.frontmatter.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {c.frontmatter.description}
                  </p>
                  <dl className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-4">
                    {c.frontmatter.metrics.map((m) => (
                      <div key={m.label}>
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="text-xl font-black text-emphasis">{m.value}</dd>
                        <dd className="mt-0.5 text-[11px] leading-tight text-muted">{m.label}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-secondary group-hover:text-bright">
                    Read case study <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand headline="Write your own" emphasis="result." />
    </>
  );
}
