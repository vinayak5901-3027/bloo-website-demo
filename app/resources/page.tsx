import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { LinkCard, Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { NewsletterForm } from '@/components/ui/NewsletterForm';
import { buildMetadata } from '@/lib/seo';
import type { IconName } from '@/data/types';

export const metadata = buildMetadata({
  title: 'Resources | Bloo Security Library',
  description:
    'Guides, blog, case studies and documentation for security teams  -  plus a TCO calculator, detection coverage guide and buyer’s guide.',
  path: '/resources',
  keywords: ['security resources', 'SIEM buyer guide', 'TCO calculator'],
});

const hubs: { icon: IconName; title: string; description: string; href: string }[] = [
  { icon: 'book', title: 'Blog', description: 'Security engineering and Telemetry Intelligence insights from the Bloo team.', href: '/blog' },
  { icon: 'briefcase', title: 'Case studies', description: 'Measurable results from security teams running Bloo across industries.', href: '/case-studies' },
  { icon: 'list', title: 'Documentation', description: 'Deploy, connect and operate the Bloo platform end to end.', href: '/docs' },
  { icon: 'plug', title: 'Integrations', description: '1,200+ connectors across SIEM, EDR, cloud, identity and threat intel.', href: '/integrations' },
];

const gated: { icon: IconName; title: string; description: string }[] = [
  { icon: 'scale', title: 'TCO calculator', description: 'Compare retention-time pricing against your current ingestion-based bill.' },
  { icon: 'shield', title: 'Detection coverage guide', description: 'Map your stack to the 600+ detection workbooks and MITRE ATT&CK coverage.' },
  { icon: 'fileCheck', title: 'Compliance buyer’s guide', description: 'What to require from a system of record for PCI DSS, HIPAA, SOC 2 and DORA.' },
  { icon: 'database', title: 'Telemetry Intelligence whitepaper', description: 'The thesis, the architecture, and the three-phase path from logs to memory.' },
];

export default function ResourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Resources', path: '/resources' }]} />
      <Hero
        eyebrow="RESOURCES"
        headline="Everything to evaluate Telemetry"
        emphasis="Intelligence."
        sub="Guides, research and documentation to help security teams understand, compare and deploy Bloo with confidence."
        primaryCta={{ label: 'Request a demo', href: '/request-demo' }}
        secondaryCta={{ label: 'Read the blog', href: '/blog' }}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="LIBRARY" title="Browse the library" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hubs.map((h, i) => (
              <Reveal key={h.title} delay={(i % 4) * 60}>
                <LinkCard icon={h.icon} title={h.title} description={h.description} href={h.href} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <SectionHeading eyebrow="GUIDES & TOOLS" title="Go deeper" intro="Request any of these and a specialist will share it with a short walkthrough." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {gated.map((g, i) => (
              <Reveal key={g.title} delay={(i % 2) * 70}>
                <LinkCard icon={g.icon} title={g.title} description={g.description} href="/request-demo" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Card className="mx-auto max-w-2xl text-center">
            <Icon name="mail" size={28} className="mx-auto text-secondary" />
            <h2 className="mt-4 font-black text-bright">The Telemetry Intelligence brief</h2>
            <p className="mx-auto mt-2 max-w-md text-body">
              Monthly, evidence-based writing on detection, SIEM economics and the autonomous SOC. No
              fluff.
            </p>
            <div className="mx-auto mt-6 max-w-sm">
              <NewsletterForm />
            </div>
          </Card>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
