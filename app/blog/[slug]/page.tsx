import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { CtaBand } from '@/components/sections/CtaBand';
import { Container, Section } from '@/components/ui/Section';
import { Markdown } from '@/components/ui/Markdown';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { buildMetadata } from '@/lib/seo';
import { articleSchema } from '@/lib/schema';
import { getBlogPosts, getBlogPost, formatDate } from '@/lib/content';

export function generateStaticParams() {
  return getBlogPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.frontmatter.title.length > 56 ? `${post.frontmatter.title.slice(0, 53)}…` : post.frontmatter.title,
    description: post.frontmatter.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    keywords: [post.frontmatter.keyword],
  });
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const { frontmatter, content } = post;
  const related = getBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: frontmatter.title,
          description: frontmatter.description,
          path: `/blog/${post.slug}`,
          author: frontmatter.author,
          authorRole: frontmatter.authorRole,
          datePublished: frontmatter.date,
          type: 'BlogPosting',
        })}
      />
      <Breadcrumbs items={[{ name: 'Blog', path: '/blog' }, { name: frontmatter.title, path: `/blog/${post.slug}` }]} />

      <article>
        <header className="border-b border-border bg-surface/30">
          <Container className="py-12 lg:py-16">
            <div className="mx-auto max-w-3xl">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-mono uppercase tracking-widecaps text-secondary">{frontmatter.category}</span>
                <span className="text-muted">· {frontmatter.readingTime}</span>
              </div>
              <h1 className="mt-4 text-balance font-black tracking-tightish text-bright">
                {frontmatter.title}
              </h1>
              <p className="mt-5 text-lg text-muted">{frontmatter.description}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-black text-white">
                  {frontmatter.author.split(' ').map((n) => n[0]).join('')}
                </span>
                <div className="text-sm">
                  <div className="font-bold text-bright">{frontmatter.author}</div>
                  <div className="text-muted">
                    {frontmatter.authorRole} · {formatDate(frontmatter.date)}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </header>

        <Container className="py-12 lg:py-16">
          <div className="mx-auto max-w-3xl">
            <Markdown>{content}</Markdown>
            <div className="mt-12 border-t border-border pt-6">
              <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-bright">
                <ArrowLeft size={16} aria-hidden="true" /> All articles
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Section alt>
          <Container>
            <h2 className="font-black text-bright">Keep reading</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 70}>
                  <Card href={`/blog/${p.slug}`} className="flex h-full flex-col">
                    <span className="font-mono text-xs uppercase tracking-widecaps text-secondary">
                      {p.frontmatter.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold leading-snug text-bright group-hover:text-bright">
                      {p.frontmatter.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-muted">{p.frontmatter.description}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <CtaBand headline="Put telemetry intelligence to" emphasis="work." />
    </>
  );
}
