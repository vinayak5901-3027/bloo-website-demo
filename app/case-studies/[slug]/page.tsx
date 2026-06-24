import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { CtaBand } from '@/components/sections/CtaBand';
import { Container } from '@/components/ui/Section';
import { Markdown } from '@/components/ui/Markdown';
import { Badge } from '@/components/ui/Badge';
import { buildMetadata } from '@/lib/seo';
import { articleSchema } from '@/lib/schema';
import { getCaseStudies, getCaseStudy } from '@/lib/content';

export function generateStaticParams() {
  return getCaseStudies().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = getCaseStudy(params.slug);
  if (!study) return {};
  return buildMetadata({
    title: study.frontmatter.title.length > 56 ? `${study.frontmatter.title.slice(0, 53)}…` : study.frontmatter.title,
    description: study.frontmatter.description,
    path: `/case-studies/${study.slug}`,
    type: 'article',
    keywords: [study.frontmatter.keyword],
  });
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  if (!study) notFound();
  const { frontmatter, content } = study;

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: frontmatter.title,
          description: frontmatter.description,
          path: `/case-studies/${study.slug}`,
          author: 'Bloo',
          datePublished: frontmatter.date,
          type: 'Article',
        })}
      />
      <Breadcrumbs
        items={[
          { name: 'Case studies', path: '/case-studies' },
          { name: frontmatter.customer, path: `/case-studies/${study.slug}` },
        ]}
      />

      <article>
        <header className="border-b border-border bg-surface/30">
          <Container className="py-12 lg:py-16">
            <div className="mx-auto max-w-4xl">
              <Badge tone="secondary">{frontmatter.industry}</Badge>
              <h1 className="mt-4 max-w-3xl text-balance font-black tracking-tightish text-bright">
                {frontmatter.title}
              </h1>
              <p className="mt-4 text-sm text-muted">{frontmatter.customer}</p>
              <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
                {frontmatter.metrics.map((m) => (
                  <div key={m.label} className="bg-bg p-6">
                    <dt className="font-mono text-xs uppercase tracking-widecaps text-muted">{m.label}</dt>
                    <dd className="mt-2 text-4xl font-black tracking-tightish text-emphasis">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </header>

        <Container className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <Markdown>{content}</Markdown>
            <div className="mt-12 border-t border-border pt-6">
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-bright">
                <ArrowLeft size={16} aria-hidden="true" /> All case studies
              </Link>
            </div>
          </div>
        </Container>
      </article>

      <CtaBand headline="See what Bloo could do for" emphasis="you." />
    </>
  );
}
