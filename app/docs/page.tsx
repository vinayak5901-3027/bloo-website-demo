import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { LinkCard } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { buildMetadata } from '@/lib/seo';
import type { IconName } from '@/data/types';

export const metadata = buildMetadata({
  title: 'Documentation | Bloo',
  description:
    'Deploy, connect and operate the Bloo platform. Getting started, deployment, connectors, detection content, query language and APIs.',
  path: '/docs',
  keywords: ['Bloo documentation', 'SIEM docs'],
});

const sections: { icon: IconName; title: string; description: string }[] = [
  { icon: 'compass', title: 'Getting started', description: 'Concepts, the system-of-record model, and a guided first deployment.' },
  { icon: 'cloud', title: 'Deployment', description: 'Deploy cloud-native SaaS or sovereign on-prem on Kubernetes (AWS, Azure).' },
  { icon: 'plug', title: 'Connectors', description: 'Onboard sources across cloud, identity, endpoint and applications.' },
  { icon: 'shield', title: 'Detection content', description: 'Use and author the 600+ streaming workbooks and SOAR playbooks.' },
  { icon: 'terminal', title: 'Bloo Query Language', description: 'High-speed search, correlation and Spark SQL across full-fidelity history.' },
  { icon: 'brain', title: 'SynthAI & Crucible', description: 'Configure conversational analytics and the autonomous SOC, with approvals.' },
  { icon: 'lock', title: 'Security & access', description: 'SSO, RBAC, secrets vaults, tenant isolation and audit configuration.' },
  { icon: 'gitBranch', title: 'APIs & SDKs', description: 'Integrate Bloo with your tooling using the platform APIs and adapter SDK.' },
];

export default function DocsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Documentation', path: '/docs' }]} />
      <Hero
        eyebrow="DOCUMENTATION"
        headline="Deploy, connect and operate"
        emphasis="Bloo."
        sub="Everything your team needs to stand up the system of record for telemetry  -  from a first deployment to authoring detection content and wiring autonomous response."
        primaryCta={{ label: 'Request access', href: '/request-demo' }}
        secondaryCta={{ label: 'Talk to an expert', href: '/contact' }}
      />
      <Section>
        <Container>
          <SectionHeading eyebrow="GUIDES" title="Documentation sections" intro="Full product documentation is provided to customers and evaluators. Request access to dive in." />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 50}>
                <LinkCard icon={s.icon} title={s.title} description={s.description} href="/request-demo" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CtaBand headline="Ready to get hands-on with" emphasis="Bloo?" primaryLabel="Request access" secondaryLabel="Talk to an expert" />
    </>
  );
}
