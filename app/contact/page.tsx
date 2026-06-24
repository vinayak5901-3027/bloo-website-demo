import { Mail, LifeBuoy, Newspaper, Phone, MapPin } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { LeadForm } from '@/components/ui/LeadForm';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';

export const metadata = buildMetadata({
  title: 'Contact Bloo | Talk to an Expert',
  description:
    'Talk to a Bloo security expert. Reach sales, support or press, or send a message and a member of our team will respond within one business day.',
  path: '/contact',
  keywords: ['contact Bloo'],
});

const channels = [
  { icon: Mail, label: 'Sales', value: siteConfig.contact.salesEmail, href: `mailto:${siteConfig.contact.salesEmail}` },
  { icon: LifeBuoy, label: 'Support', value: siteConfig.contact.supportEmail, href: `mailto:${siteConfig.contact.supportEmail}` },
  { icon: Newspaper, label: 'Press', value: siteConfig.contact.pressEmail, href: `mailto:${siteConfig.contact.pressEmail}` },
  { icon: Phone, label: 'Phone', value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/[^+\d]/g, '')}` },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Contact', path: '/contact' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Bloo',
          url: `${siteConfig.url}/contact`,
          mainEntity: { '@id': `${siteConfig.url}/#organization` },
        }}
      />
      <Section className="pt-[calc(var(--header-height)+3rem)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Eyebrow>CONTACT</Eyebrow>
              <h1 className="font-black tracking-tightish text-bright">
                Talk to a security <span className="italic text-emphasis">expert.</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Whether you’re evaluating Bloo, need support, or want to partner, we’re here. Use the
                form or reach the right team directly.
              </p>

              <dl className="mt-10 grid gap-5 sm:grid-cols-2">
                {channels.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                      <c.icon size={20} aria-hidden="true" />
                    </span>
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-widecaps text-muted">{c.label}</dt>
                      <dd>
                        <a href={c.href} className="text-body transition-colors hover:text-secondary">
                          {c.value}
                        </a>
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex items-start gap-3 border-t border-border pt-8">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                  <MapPin size={20} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widecaps text-muted">Headquarters</p>
                  <p className="mt-1 text-body">{siteConfig.contact.addressLine}</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-surface/60 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-bright">Send us a message</h2>
              <p className="mt-1.5 text-sm text-muted">We respond within one business day.</p>
              <div className="mt-6">
                <LeadForm variant="contact" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
