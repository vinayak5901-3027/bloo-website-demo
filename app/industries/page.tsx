import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { industries } from '@/data/industries';

export const metadata = buildMetadata({
  title: 'Industries | Bloo Security for Your Sector',
  description:
    'Telemetry Intelligence for financial services, healthcare, public sector, technology, manufacturing and retail  -  with the compliance each sector demands.',
  path: '/industries',
  keywords: ['cybersecurity by industry', 'compliance', 'sector security'],
});

export default function IndustriesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Industries', path: '/industries' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: industries.map((ind, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: ind.name,
            url: `${siteConfig.url}/industries#${ind.slug}`,
          })),
        }}
      />
      <Hero
        eyebrow="INDUSTRIES"
        headline="Built for the most demanding"
        emphasis="sectors."
        sub="Every industry faces the same structural problem  -  short memory, rationed visibility, and rising compliance pressure. Bloo solves it with full-fidelity retention and detection in your own cloud."
        primaryCta={{ label: 'Request a demo', href: '/request-demo' }}
        secondaryCta={{ label: 'Talk to an expert', href: '/contact' }}
      />
      <Section>
        <Container>
          <SectionHeading eyebrow="BY SECTOR" title="Where Bloo fits your mandate" />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 2) * 70}>
                <Card id={ind.slug} className="flex h-full flex-col">
                  <div className="flex items-center gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                      <Icon name={ind.icon} size={24} />
                    </span>
                    <h2 className="text-xl font-bold text-bright">{ind.name}</h2>
                  </div>
                  <p className="mt-4 text-body leading-relaxed">{ind.summary}</p>
                  <div className="mt-5">
                    <p className="font-mono text-xs uppercase tracking-widecaps text-muted">Top pains</p>
                    <ul className="mt-2 space-y-1.5">
                      {ind.pains.map((p) => (
                        <li key={p} className="flex gap-2 text-sm text-body">
                          <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-secondary" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {ind.compliance.map((c) => (
                      <Badge key={c} tone="muted">
                        {c}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
