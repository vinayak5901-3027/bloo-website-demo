import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { CtaBand } from '@/components/sections/CtaBand';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Section, Container, SectionHeading, Eyebrow } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { buildMetadata } from '@/lib/seo';
import { personSchema } from '@/lib/schema';
import { leadership, leadershipPrinciples } from '@/data/company';

export const metadata = buildMetadata({
  title: 'Leadership | Bloo',
  description:
    'Meet the team building the system of record for Telemetry Intelligence  -  engineering, product, security research and go-to-market leadership at Bloo.',
  path: '/leadership',
  keywords: ['Bloo leadership team', 'Shomiron Das Gupta', 'Santosh Vishwanath'],
});

function LeaderAvatar({ name, photo }: { name: string; photo?: string }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  if (photo) {
    return (
      <div className="relative h-[400px] w-[400px] shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/10">
        {/* Glass shimmer overlay */}
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-1px_1px_rgba(0,0,0,0.25)]" />
        <Image
          src={photo}
          alt={name}
          width={400}
          height={400}
          className="h-full w-full object-cover object-top"
        />
      </div>
    );
  }

  return (
    <div className="flex h-[400px] w-[400px] shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-[112px] text-white">
      {initials}
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Leadership', path: '/leadership' }]} />
      <JsonLd data={leadership.map((l) => personSchema({ name: l.name, jobTitle: l.role, bio: l.bio }))} />

      <Hero
        eyebrow="LEADERSHIP"
        headline="The team building the memory"
        emphasis="layer."
        sub="Bloo is led by engineers and operators who have built data infrastructure and defended it at scale."
        primaryCta={{ label: 'See open roles', href: '/careers' }}
        secondaryCta={{ label: 'About Bloo', href: '/about' }}
      />

      {/* ── Leadership Principles ── */}
      <Section alt>
        <Container>
          <SectionHeading
            eyebrow="Our Leadership Principles"
            title="Guiding Our Success"
            intro="These core principles shape our leadership approach and company culture."
            align="center"
            className="mb-12"
          />
          <div className="cards-carousel">
            {leadershipPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface/70 p-6 h-full">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="t-desc text-body leading-relaxed">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Executive Team ── */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="Executive Team"
            title="Meet Our Leaders"
            intro="Our experienced leadership team brings together diverse expertise in cybersecurity, technology, and business."
            align="center"
            className="mb-14"
          />

          <div className="flex flex-col gap-14">
            {leadership.map((leader, i) => (
              <Reveal key={leader.name} delay={i * 80}>
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
                  {/* Photo */}
                  <div className="shrink-0">
                    <LeaderAvatar name={leader.name} photo={leader.photo} />
                  </div>

                  {/* Bio */}
                  <div className="flex-1">
                    <h3 className="card-title text-bright">{leader.name}</h3>
                    <p className="mt-1 t-desc font-mono uppercase tracking-widecaps text-secondary">
                      {leader.role}
                    </p>
                    <p className="mt-4 t-desc text-body leading-relaxed">{leader.bio}</p>
                    {leader.linkedin && (
                      <Link
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 t-desc text-secondary hover:text-bright transition-colors"
                      >
                        View LinkedIn Profile
                        <ExternalLink size={14} aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Divider between members */}
                {i < leadership.length - 1 && (
                  <div className="mt-14 border-t border-border" />
                )}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        headline="Want to build this with"
        emphasis="us?"
        sub="We are hiring across engineering, security research, product and go-to-market."
        primaryLabel="See open roles"
        primaryHref="/careers"
        secondaryLabel="About Bloo"
        secondaryHref="/about"
      />
    </>
  );
}
