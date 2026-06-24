import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Hero } from '@/components/sections/Hero';
import { HeroVisual } from '@/components/sections/HeroVisual';
import { StatsBand, WorkflowSteps } from '@/components/sections/Blocks';
import { TrustStrip } from '@/components/sections/Trust';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBand } from '@/components/sections/CtaBand';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { LinkCard, Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { Badge } from '@/components/ui/Badge';
import { ProductLogo } from '@/components/ui/ProductLogo';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { products } from '@/data/products';
import { solutions } from '@/data/solutions';
import { industries } from '@/data/industries';
import { getBlogPosts, formatDate } from '@/lib/content';

export const metadata = buildMetadata({
  title: 'Bloo | Telemetry Intelligence for the Enterprise',
  description:
    'Bloo is the system of record for Telemetry Intelligence - full-fidelity logging, detection and AI-driven security operations, at predictable cost.',
  path: '/',
  keywords: ['telemetry intelligence', 'cloud SIEM', 'security datalake', 'autonomous SOC', 'threat detection'],
});

const homeFaqs = [
  { q: 'What is Bloo?', a: 'Bloo is the system of record for Telemetry Intelligence - it captures full-fidelity telemetry, retains it hot for years at predictable cost, and turns it into detection, investigation and autonomous response, inside your own cloud.' },
  { q: 'Is Bloo a SIEM?', a: 'Bloo replaces traditional log data lakes and supports SIEM workflows - Bloo SIEM is a cloud-native product on the platform - but Bloo is fundamentally a system of record for enterprise telemetry that a SIEM consumes.' },
  { q: 'How does Bloo control cost?', a: 'Economics scale with retention time, not ingestion volume, and stream compression cuts storage by up to 98%. You can log everything without ingestion penalties or surprise bills.' },
  { q: 'Where does our data live?', a: 'Inside your own cloud or bare metal. Bloo deploys into your environment so sovereignty, governance and access control stay with you.' },
];


export default function HomePage() {
  const featuredPosts = getBlogPosts().slice(0, 4);

  return (
    <>
      <Hero
        eyebrow="TELEMETRY INTELLIGENCE PLATFORM"
        headline="Enterprise security, without"
        emphasis="compromise."
        sub="Capture everything. Retain it hot for years. Reason over it in seconds. Bloo is the system of record for Telemetry Intelligence - detection, investigation and autonomous response on one datalake, in your cloud, at predictable cost."
        primaryCta={{ label: 'Request a demo', href: '/request-demo' }}
        secondaryCta={{ label: 'Explore the platform', href: '/platform' }}
      >
        <HeroVisual />
      </Hero>

      <TrustStrip />

      {/* ───────────────── Platform pillars */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="ONE PLATFORM, FOUR PILLARS"
            title="Memory, detection, investigation and response - integrated"
            intro="Most teams stitch together a data lake, a SIEM, an analytics tool and automation. Bloo unifies them on one canonical system of record, so every layer reasons over the same full-fidelity truth."
          />
          <div className="cards-carousel mt-12">
            {products
              .filter((p) => p.slug !== 'bloo-onprem-siem')
              .map((p, i) => (
                <Reveal key={p.slug} delay={(i % 4) * 70}>
                  <Card href={`/platform/${p.slug}`} className="group flex h-full flex-col">
                    <div className="mb-5">
                      <ProductLogo slug={p.slug} height={52} />
                    </div>
                    <p className="mt-1 flex-1 t-desc text-body leading-relaxed">{`${p.positioning}. ${p.hero.sub.split('.')[0]}.`}</p>
                    <span className="mt-5 inline-flex w-full items-center justify-end gap-1.5 text-sm font-bold text-secondary transition-colors group-hover:text-bright">
                      View
                      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Card>
                </Reveal>
              ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/platform" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-bright">
              See the full platform <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ───────────────── Proof stats */}
      <StatsBand
        eyebrow="THE NUMBERS"
        heading="Full fidelity, longer memory, predictable cost"
        dividerAfter={2}
        items={[
          { value: 'Up to 98%', label: 'Compression', sub: 'Same disk footprint holds far more data' },
          { value: '365 Days', label: 'Hot retention OOTB', sub: 'Threat hunt and audit against complete truth' },
          { value: '60%', label: 'Lower composite cost', sub: 'Below typical on-premise deployments', tone: 'accent' },
          { value: '600+', label: 'Detection workbooks', sub: 'Streaming rules updated continuously' },
        ]}
      />

      {/* ───────────────── The thesis (narrative) */}
      <Section>
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <Badge tone="secondary" className="mb-5">
                The thesis
              </Badge>
              <h2 className="font-black tracking-tightish text-bright">
                Telemetry is not exhaust. It is{' '}
                <span className="italic text-emphasis">enterprise memory.</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Most platforms treat your logs as something to throw away - expensive to retain,
                fragmented across vendors, and shaped for human queries instead of machine reasoning.
                Bloo removes that constraint.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted">
                By running at a small footprint, at radically lower cost, and entirely inside your
                own cloud, Bloo makes full-fidelity, long-term telemetry viable. Once retained as
                canonical memory, telemetry becomes intelligence - continuously structured and
                reasoned over by both humans and autonomous agents.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/about" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-bright">
                  Read our thesis <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid gap-4">
                {[
                  { p: 'Telemetry treated as exhaust', a: 'Long-term organizational memory', icon: 'history' as const },
                  { p: 'Cost penalizes visibility', a: 'Predictable, volume-tolerant economics', icon: 'scale' as const },
                  { p: 'Fragmentation across tools', a: 'A canonical system of record', icon: 'layers' as const },
                  { p: 'Human-first tooling', a: 'Machine-consumable data for agents', icon: 'bot' as const },
                ].map((row) => (
                  <Card key={row.p} className="flex items-center gap-4 !p-5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                      <Icon name={row.icon} size={20} />
                    </span>
                    <div>
                      <div className="text-sm text-muted line-through decoration-error/60">{row.p}</div>
                      <div className="font-bold text-bright">{row.a}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ───────────────── Security flow */}
      <WorkflowSteps
        eyebrow="THE SECURITY FLOW"
        heading="From raw telemetry to resolved incident"
        intro="One pipeline, end to end - capture at full fidelity, detect in real time, investigate against years of history, and respond through validated playbooks."
        steps={[
          { title: 'Capture', description: 'Full-fidelity telemetry from every source lands in Datafabric and is enriched inline.' },
          { title: 'Detect', description: '600+ streaming workbooks evaluate every event against continuously updated content.' },
          { title: 'Investigate', description: 'Analysts and SynthAI reason over years of hot history with evidence-backed answers.' },
          { title: 'Respond', description: 'Crucible proposes response; consequential actions wait for human approval.' },
        ]}
      />

      {/* ───────────────── Certifications & Compliance */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="CERTIFICATIONS & COMPLIANCE"
            title="Built to the highest security standards"
            intro="Bloo aligns with globally recognised security frameworks and undergoes rigorous third-party audits to ensure your data, sovereignty, and compliance requirements are always met."
            align="center"
            className="mb-12"
          />
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Reveal>
              <div className="rounded-lg border border-border bg-surface/70 px-8 py-5 text-center">
                <p className="text-base font-bold text-bright">ISO 27001</p>
                <p className="mt-1 text-xs text-muted">Information Security</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-lg border border-border bg-surface/70 px-8 py-5 text-center">
                <p className="text-base font-bold text-bright">SOC 2 Type II</p>
                <p className="mt-1 text-xs text-muted">Security &amp; Availability</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ───────────────── Solutions */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="SOLUTIONS"
            title="Outcomes for every security mandate"
            intro="Whether you are modernizing a legacy SIEM, automating a stretched SOC, or proving compliance, Bloo maps to the outcome you own."
          />
          <div className="cards-carousel mt-12">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 70}>
                <LinkCard
                  icon={
                    s.slug === 'threat-detection'
                      ? 'shield'
                      : s.slug === 'compliance-monitoring'
                        ? 'fileCheck'
                        : s.slug === 'soc-automation'
                          ? 'bot'
                          : s.slug === 'siem-modernization'
                            ? 'refresh'
                            : 'handshake'
                  }
                  title={s.name}
                  description={s.hero.sub.split(' - ')[0].trim()}
                  href={`/solutions/${s.slug}`}
                />
              </Reveal>
            ))}
            <Reveal delay={210}>
              <Card href="/industries" className="flex h-full flex-col justify-center bg-gradient-brand-soft">
                <h3 className="text-lg font-bold text-bright">By industry</h3>
                <p className="mt-2 text-body">
                  See how financial services, healthcare, public sector and more deploy Bloo.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary">
                  Explore industries <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ───────────────── Industries strip */}
      <Section alt>
        <Container>
          <SectionHeading eyebrow="INDUSTRIES" title="Built for the most demanding sectors" align="center" className="mb-12" />
          <div className="cards-carousel">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 4) * 60}>
                <Card className="flex h-full items-start gap-4 !p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
                    <Icon name={ind.icon} size={22} />
                  </span>
                  <div>
                    <h3 className="font-bold text-bright">{ind.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{ind.summary}</p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────────── Latest research / blog */}
      {featuredPosts.length > 0 && (
        <Section>
          <Container>
            <div className="flex items-end justify-between gap-4">
              <SectionHeading eyebrow="LATEST RESEARCH" title="From the Bloo engineering blog" />
              <Link href="/blog" className="hidden shrink-0 items-center gap-1.5 text-sm font-bold text-secondary hover:text-bright sm:inline-flex">
                All articles <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
            <div className="cards-carousel mt-10">
              {featuredPosts.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 4) * 70}>
                  <Card href={`/blog/${post.slug}`} className="flex h-full flex-col">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono uppercase tracking-widecaps text-secondary">{post.frontmatter.category}</span>
                      <span className="text-muted">· {post.frontmatter.readingTime}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold leading-snug text-bright group-hover:text-bright">
                      {post.frontmatter.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{post.frontmatter.description}</p>
                    <div className="mt-4 text-xs text-muted">
                      {post.frontmatter.author} · {formatDate(post.frontmatter.date)}
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <FaqSection faqs={homeFaqs} eyebrow="FAQ" heading="Bloo, in brief" />

      <CtaBand
        headline="See Bloo against your own"
        emphasis="telemetry."
        sub={`Book a 30-minute walkthrough tailored to your stack - we will map your use cases and estimate your TCO. ${siteConfig.proof.coverage} expert coverage from day one.`}
      />
    </>
  );
}
