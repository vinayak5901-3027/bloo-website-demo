import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { FeatureCard } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { buildMetadata } from '@/lib/seo';
import { partnerTypes } from '@/data/company';

export const metadata = buildMetadata({
  title: 'Partners | Bloo Partner Ecosystem',
  description:
    'Partner with Bloo  -  MSSPs, MDR providers, cloud platforms and technology vendors build on the system of record for Telemetry Intelligence.',
  path: '/partners',
  keywords: ['security technology partners', 'MSSP partner program'],
});

export default function PartnersPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Partners', path: '/partners' }]} />
      <Hero
        eyebrow="PARTNERS"
        headline="Build on the system of"
        emphasis="record."
        sub="Agents don’t integrate with tools  -  they integrate with the backplane that maintains enterprise understanding. Bloo is that backplane, and the foundation our partners build and deliver on."
        primaryCta={{ label: 'Become a partner', href: '/contact' }}
        secondaryCta={{ label: 'Explore the platform', href: '/platform' }}
      />
      <Section>
        <Container>
          <SectionHeading eyebrow="PARTNER PROGRAMS" title="Ways to partner with Bloo" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {partnerTypes.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 70}>
                <FeatureCard icon={p.icon} title={p.title} description={p.description} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section alt>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="WHY PARTNER"
            title="Co-sell, not compete"
            intro="Bloo is the substrate your offerings run on. We position you to your customers, never against them  -  with per-tenant isolation, predictable economics and a 1,200+ integration catalog behind you."
            className="mb-0"
          />
        </Container>
      </Section>
      <CtaBand
        headline="Let’s build something"
        emphasis="together."
        sub="Tell us about your business and we’ll find the right way to partner."
        primaryLabel="Become a partner"
        primaryHref="/contact"
        secondaryLabel="Talk to an expert"
        secondaryHref="/contact"
      />
    </>
  );
}
