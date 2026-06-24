import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Integrations | 1,200+ Connectors | Bloo',
  description:
    'Bloo connects to the security stack you already run  -  1,200+ pre-built adapters across SIEM, EDR, cloud, identity, email, threat intelligence and ITSM.',
  path: '/integrations',
  keywords: ['security integrations', 'SIEM connectors', 'EDR integrations'],
});

// Sourced from the Crucible integration catalog (1,200+ across 15+ categories).
const categories = [
  { name: 'Threat intelligence & enrichment', count: '400+', examples: 'VirusTotal, Recorded Future, AbuseIPDB, GreyNoise, Shodan, MITRE ATT&CK' },
  { name: 'Analytics & SIEM', count: '145+', examples: 'Splunk, Microsoft Sentinel, Elastic, Google Chronicle, QRadar, Sumo Logic' },
  { name: 'Network security', count: '140+', examples: 'Palo Alto, Fortinet, Check Point, Cisco, Zscaler' },
  { name: 'Utilities & automation', count: '110+', examples: 'Scripting, data transforms, generic HTTP/API connectors' },
  { name: 'Cloud (AWS, Azure, GCP)', count: '85+', examples: 'CloudTrail, Azure Activity, GCP Audit, cloud control planes' },
  { name: 'Endpoint & EDR', count: '80+', examples: 'CrowdStrike, Microsoft Defender, SentinelOne, Cortex XDR, Carbon Black' },
  { name: 'IT services & ITSM', count: '60+', examples: 'Enterprise service-management and operations platforms' },
  { name: 'Identity & access', count: '55+', examples: 'Okta, Azure AD / Entra ID, Active Directory, CyberArk' },
  { name: 'Case management & ticketing', count: '40+', examples: 'ServiceNow, Jira and other case/ticketing systems' },
  { name: 'Forensics & malware analysis', count: '40+', examples: 'Sandboxes, malware detonation, forensic tooling' },
  { name: 'Vulnerability management', count: '35+', examples: 'Scanners and vulnerability platforms' },
  { name: 'Email security', count: '35+', examples: 'Proofpoint, Abnormal Security, Mimecast, Exchange / O365' },
  { name: 'Messaging & collaboration', count: '25+', examples: 'Slack, Microsoft Teams, PagerDuty, Opsgenie' },
  { name: 'Deception & breach simulation', count: '13+', examples: 'Deception grids, breach-and-attack-simulation tools' },
  { name: 'Database', count: '12+', examples: 'Direct database connectors' },
];

export default function IntegrationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Integrations', path: '/integrations' }]} />
      <Hero
        eyebrow="INTEGRATIONS"
        headline="Connects to the stack you already"
        emphasis="run."
        sub="The Bloo integration catalog ships 1,200+ pre-built adapters across 15+ categories. Every adapter is built on a common SDK pattern, so new systems slot in without re-architecting  -  each advertises whether it supports queries, actions, or both."
        primaryCta={{ label: 'Request a demo', href: '/request-demo' }}
        secondaryCta={{ label: 'Talk to an expert', href: '/contact' }}
      />
      <Section>
        <Container>
          <SectionHeading eyebrow="CATALOG" title="1,200+ adapters, 15+ categories" />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c, i) => (
              <Reveal key={c.name} delay={(i % 4) * 50}>
                <Card className="h-full">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-base font-bold text-bright">{c.name}</h3>
                    <span className="font-mono text-sm text-emphasis">{c.count}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.examples}</p>
                </Card>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            A curated set is integrated natively; the full catalog extends coverage to the long tail
            of tools enterprises actually run. Don’t see yours?{' '}
            <a href="/contact" className="text-secondary underline underline-offset-2">
              Ask us
            </a>
            .
          </p>
        </Container>
      </Section>
      <CtaBand headline="Plug Bloo into your" emphasis="stack." />
    </>
  );
}
