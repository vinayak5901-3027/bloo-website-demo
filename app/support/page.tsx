import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { LinkCard } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { FaqSection } from '@/components/sections/FaqSection';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import type { IconName } from '@/data/types';

export const metadata = buildMetadata({
  title: 'Support | Bloo',
  description:
    'Get help with Bloo  -  documentation, enterprise support with 24/7 coverage, security disclosure and system status. We respond fast.',
  path: '/support',
  keywords: ['Bloo support'],
});

const channels: { icon: IconName; title: string; description: string; href: string }[] = [
  { icon: 'book', title: 'Documentation', description: 'Self-serve guides for deployment, connectors and operations.', href: '/docs' },
  { icon: 'mail', title: 'Contact support', description: `Reach our team at ${siteConfig.contact.supportEmail} for technical help.`, href: `mailto:${siteConfig.contact.supportEmail}` },
  { icon: 'shield', title: 'Security disclosure', description: 'Report a vulnerability responsibly  -  we acknowledge within one business day.', href: '/contact' },
  { icon: 'activity', title: 'System status', description: '24/7 coverage with transparent incident communication.', href: '/contact' },
];

const faqs = [
  { q: 'What support do enterprise customers get?', a: 'Enterprise customers receive 24/7 coverage with a named technical contact, prioritized response, and access to detection-content and deployment specialists.' },
  { q: 'How do I report a security issue?', a: `Email ${siteConfig.contact.supportEmail} or use the contact form. We follow a transparent, accountable disclosure process and acknowledge reports within one business day.` },
  { q: 'Where is the product documentation?', a: 'Full documentation is available to customers and evaluators. Visit the documentation hub or request access through a demo.' },
];

export default function SupportPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Support', path: '/support' }]} />
      <Hero
        eyebrow="SUPPORT"
        headline="Help, when you"
        emphasis="need it."
        sub="From self-serve documentation to 24/7 enterprise support, we keep your security operations running. Transparent, accountable, and fast."
        primaryCta={{ label: 'Contact support', href: '/contact' }}
        secondaryCta={{ label: 'Read the docs', href: '/docs' }}
      />
      <Section>
        <Container>
          <SectionHeading eyebrow="GET HELP" title="Support channels" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => (
              <Reveal key={c.title} delay={(i % 4) * 60}>
                <LinkCard icon={c.icon} title={c.title} description={c.description} href={c.href} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <FaqSection faqs={faqs} eyebrow="SUPPORT FAQ" heading="Common support questions" alt />
      <CtaBand />
    </>
  );
}
