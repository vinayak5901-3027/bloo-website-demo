import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import type { IconName } from '@/data/types';

export const metadata = buildMetadata({
  title: 'About Bloo | The System of Record for Telemetry',
  description:
    'Bloo is building the system of record for Telemetry Intelligence  -  turning enterprise telemetry into long-term, machine-consumable memory.',
  path: '/about',
  keywords: ['about Bloo', 'telemetry intelligence company'],
});

const pillars: { name: string; icon: IconName; text: string }[] = [
  { name: 'Memory', icon: 'history', text: 'Bloo creates long-term organizational memory from telemetry. Data compounds in value instead of expiring.' },
  { name: 'Reasoning', icon: 'brain', text: 'Bloo is reasoned over, not queried  -  maintaining continuous understanding rather than reconstructing insight on demand.' },
  { name: 'Control', icon: 'lock', text: 'Bloo restores architectural control over how telemetry is collected, retained, governed and trusted.' },
  { name: 'Predictability', icon: 'scale', text: 'Economics scale with time, not data volume. Growth never introduces penalties or surprise bills.' },
  { name: 'Agents', icon: 'bot', text: 'Bloo is built for machine consumers first. Agents require memory, context and ground truth to operate correctly.' },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'About', path: '/about' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Bloo',
          url: `${siteConfig.url}/about`,
          mainEntity: { '@id': `${siteConfig.url}/#organization` },
        }}
      />
      <Hero
        eyebrow="ABOUT BLOO"
        headline="Telemetry is the raw material of enterprise"
        emphasis="intelligence."
        sub="Bloo is building the system of record for machine-consumable enterprise telemetry. We collect and retain all logs  -  security, infrastructure, application, cloud and identity  -  and continuously convert them into structured, durable knowledge that humans and autonomous agents use to drive outcomes."
        primaryCta={{ label: 'See the platform', href: '/platform' }}
        secondaryCta={{ label: 'Read the blog', href: '/blog' }}
      />

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <Reveal>
              <SectionHeading eyebrow="MISSION" title="Make full-fidelity telemetry viable" />
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Enterprises generate enormous volumes of telemetry, but existing systems treat it as
                exhaust  -  expensive to retain, fragmented across vendors, and optimized for human
                queries rather than machine reasoning. Bloo removes that constraint.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                By operating at a small footprint, at radically lower cost, and entirely inside the
                customer’s own cloud, Bloo makes full-fidelity, long-term telemetry economically and
                operationally viable. Once retained as canonical memory, telemetry becomes
                intelligence.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <SectionHeading eyebrow="VISION" title="Unlock the intelligence hidden in telemetry" />
              <p className="mt-5 text-lg leading-relaxed text-muted">
                We envision a world where every organization can unlock the full intelligence hidden
                within their telemetry  -  transforming data once seen as exhaust into a continuous
                source of insight and advantage.
              </p>
              <blockquote className="mt-6 font-bold italic text-bright flex items-center justify-center text-center" style={{fontSize: '35px'}}>
                Queries answer questions. Bloo maintains understanding.
              </blockquote>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <SectionHeading
            eyebrow="NARRATIVE PILLARS"
            title="Five locked pillars"
            intro="Every Bloo artifact maps to at least one of these. They are the contract for how we build and how we talk."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 70}>
                <Card className="h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3 className="mt-5 text-bright">{p.name}</h3>
                  <p className="mt-3 text-lg text-body leading-relaxed">{p.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="text-center">
          <SectionHeading align="center" eyebrow="THE TEAM" title="Built by people who have seen what breaks at scale" className="mb-8" />
          <Link href="/leadership" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-bright">
            Meet the leadership team <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
