import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { LinkCard } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { buildMetadata } from '@/lib/seo';
import { solutions } from '@/data/solutions';
import type { IconName } from '@/data/types';

export const metadata = buildMetadata({
  title: 'Security Solutions | Bloo',
  description:
    'Outcomes by use case: threat detection and response, compliance monitoring, SOC automation, SIEM modernization, and managed security services.',
  path: '/solutions',
  keywords: ['enterprise security solutions', 'SOC automation', 'SIEM modernization'],
});

const icons: Record<string, IconName> = {
  'threat-detection': 'shield',
  'compliance-monitoring': 'fileCheck',
  'soc-automation': 'bot',
  'siem-modernization': 'refresh',
  'managed-security-services': 'handshake',
};

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Solutions', path: '/solutions' }]} />
      <Hero
        eyebrow="SOLUTIONS"
        headline="Map Bloo to the outcome you"
        emphasis="own."
        sub="Whether you are modernizing a legacy SIEM, automating a stretched SOC, or proving compliance, Bloo delivers the result  -  on one platform, in your cloud, at predictable cost."
        primaryCta={{ label: 'Request a demo', href: '/request-demo' }}
        secondaryCta={{ label: 'Explore the platform', href: '/platform' }}
      />
      <Section>
        <Container>
          <SectionHeading eyebrow="BY USE CASE" title="Five solutions, one system of record" />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 70}>
                <LinkCard
                  icon={icons[s.slug]}
                  title={s.name}
                  description={s.hero.sub.split(' - ')[0].trim()}
                  href={`/solutions/${s.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand />
    </>
  );
}
