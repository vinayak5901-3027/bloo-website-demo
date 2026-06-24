import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { CtaBand } from '@/components/sections/CtaBand';
import { Section, Container, SectionHeading, Eyebrow } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { buildMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/site';
import { getBlogPosts, formatDate } from '@/lib/content';

export const metadata = buildMetadata({
  title: 'Blog | Bloo Security Engineering & Telemetry',
  description:
    'Security engineering and Telemetry Intelligence insights from the Bloo team  -  detection, SIEM economics, SOC automation and the autonomous SOC.',
  path: '/blog',
  keywords: ['security engineering blog', 'telemetry intelligence', 'SOC'],
});

export default function BlogIndex() {
  const posts = getBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }]} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'Bloo Blog',
          url: `${siteConfig.url}/blog`,
          publisher: { '@id': `${siteConfig.url}/#organization` },
          blogPost: posts.map((p) => ({
            '@type': 'BlogPosting',
            headline: p.frontmatter.title,
            url: `${siteConfig.url}/blog/${p.slug}`,
            datePublished: p.frontmatter.date,
            author: { '@type': 'Person', name: p.frontmatter.author },
          })),
        }}
      />

      <Section className="!pb-10">
        <Container>
          <Eyebrow>SECURITY ENGINEERING BLOG</Eyebrow>
          <h1 className="max-w-3xl font-black tracking-tightish text-bright">
            Insights on telemetry, detection and the{' '}
            <span className="italic text-emphasis">autonomous SOC.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Evidence-based writing from the team building the system of record for Telemetry
            Intelligence.
          </p>
        </Container>
      </Section>

      {featured && (
        <Section className="!pt-0">
          <Container>
            <Reveal>
              <Card href={`/blog/${featured.slug}`} className="group grid gap-6 lg:grid-cols-2 lg:items-center">
                <div className="aspect-[16/10] rounded-md bg-gradient-brand-soft ring-1 ring-border lg:order-last">
                  <div className="flex h-full items-center justify-center">
                    <span className="font-mono text-xs uppercase tracking-widecaps text-secondary">
                      Featured · {featured.frontmatter.category}
                    </span>
                  </div>
                </div>
                <div>
                  <Badge tone="accent">Featured</Badge>
                  <h2 className="mt-4 font-black leading-snug text-bright group-hover:text-bright">
                    {featured.frontmatter.title}
                  </h2>
                  <p className="mt-3 text-body">{featured.frontmatter.description}</p>
                  <div className="mt-4 text-sm text-muted">
                    {featured.frontmatter.author} · {featured.frontmatter.authorRole} ·{' '}
                    {formatDate(featured.frontmatter.date)} · {featured.frontmatter.readingTime}
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-secondary group-hover:text-bright">
                    Read article <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </div>
              </Card>
            </Reveal>
          </Container>
        </Section>
      )}

      <Section alt>
        <Container>
          <SectionHeading eyebrow="ALL ARTICLES" title="Latest from the blog" />
          <div className="cards-carousel mt-10">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 70}>
                <Card href={`/blog/${p.slug}`} className="flex h-full flex-col">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-mono uppercase tracking-widecaps text-secondary">
                      {p.frontmatter.category}
                    </span>
                    <span className="text-muted">· {p.frontmatter.readingTime}</span>
                  </div>
                  <h3 className="mt-3 font-bold leading-snug text-bright group-hover:text-bright">
                    {p.frontmatter.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {p.frontmatter.description}
                  </p>
                  <div className="mt-4 text-sm text-muted">
                    {p.frontmatter.author} · {formatDate(p.frontmatter.date)}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand />
    </>
  );
}
