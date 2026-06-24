import { MapPin } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { Button } from '@/components/ui/Button';
import { buildMetadata } from '@/lib/seo';
import { jobPostingSchema } from '@/lib/schema';
import { openRoles } from '@/data/company';
import type { IconName } from '@/data/types';

export const metadata = buildMetadata({
  title: 'Careers at Bloo | Build the Memory Layer',
  description:
    'Join Bloo and build foundational security infrastructure. Open roles across platform engineering, security research, applied AI, product and revenue.',
  path: '/careers',
  keywords: ['cybersecurity careers', 'Bloo jobs'],
});

const values: { title: string; icon: IconName; text: string }[] = [
  { title: 'Substance over hype', icon: 'compass', text: 'We earn trust through clarity and results, not buzzwords. Conviction, backed by evidence.' },
  { title: 'Infrastructure-grade', icon: 'server', text: 'We build foundational systems meant to last  -  serious, precise, and reliable at scale.' },
  { title: 'Humans in command', icon: 'users', text: 'We automate aggressively and keep people in control of every consequential decision.' },
  { title: 'Ownership', icon: 'key', text: 'Small teams, real autonomy, and the mandate to ship work that matters.' },
];

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Careers', path: '/careers' }]} />
      <JsonLd
        data={openRoles.map((r) =>
          jobPostingSchema({
            title: r.title,
            description: r.summary,
            path: '/careers',
            employmentType: 'FULL_TIME',
            location: r.location,
            remote: r.remote,
          }),
        )}
      />
      <Hero
        eyebrow="CAREERS"
        headline="Build foundational security"
        emphasis="infrastructure."
        sub="We are a small team building the system of record for Telemetry Intelligence. If you want your work to matter at scale, with autonomy and substance, you will fit in here."
        primaryCta={{ label: 'View open roles', href: '#roles' }}
        secondaryCta={{ label: 'Meet the team', href: '/leadership' }}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="HOW WE WORK" title="What we value" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 60}>
                <Card className="h-full">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                    <Icon name={v.icon} size={22} />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-bright">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{v.text}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section alt id="roles">
        <Container>
          <SectionHeading eyebrow="OPEN ROLES" title="Where we’re hiring" />
          <ul className="mt-10 space-y-4">
            {openRoles.map((r, i) => (
              <Reveal key={r.title} as="li" delay={(i % 3) * 50}>
                <div className="flex flex-col gap-4 rounded-md border border-border bg-bg p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-bold text-bright">{r.title}</h3>
                      <Badge tone="muted">{r.team}</Badge>
                    </div>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{r.summary}</p>
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted">
                      <MapPin size={14} aria-hidden="true" /> {r.location} · {r.type}
                    </p>
                  </div>
                  <Button href="/contact" variant="ghost" size="md" className="shrink-0">
                    Apply
                  </Button>
                </div>
              </Reveal>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">
            Don’t see your role? We’re always glad to meet exceptional people  - {' '}
            <a href="/contact" className="text-secondary underline underline-offset-2">
              introduce yourself
            </a>
            .
          </p>
        </Container>
      </Section>

      <CtaBand
        headline="Help us build the system of"
        emphasis="record."
        sub="Explore the platform you would be working on."
        primaryLabel="Explore the platform"
        primaryHref="/platform"
        secondaryLabel="Talk to us"
        secondaryHref="/contact"
      />
    </>
  );
}
