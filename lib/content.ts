import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

/**
 * File-based content layer. Blog posts and case studies live as editable
 * Markdown files under content/ with YAML frontmatter. Add a file → it
 * appears in the index and gets its own route automatically. No rebuild
 * of components required  -  just edit the Markdown.
 */

const CONTENT_DIR = path.join(process.cwd(), 'content');

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string; // ISO yyyy-mm-dd
  author: string;
  authorRole: string;
  category: string;
  readingTime: string;
  keyword: string;
  featured?: boolean;
};

export type CaseStudyFrontmatter = {
  title: string;
  description: string;
  industry: string;
  customer: string;
  date: string;
  logo?: string;
  metrics: { value: string; label: string }[];
  keyword: string;
};

export type Doc<T> = { slug: string; frontmatter: T; content: string };

function readCollection<T>(dir: string): Doc<T>[] {
  const full = path.join(CONTENT_DIR, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(full, file), 'utf8');
      const { data, content } = matter(raw);
      return { slug: file.replace(/\.mdx?$/, ''), frontmatter: data as T, content };
    });
}

export function getBlogPosts(): Doc<BlogFrontmatter>[] {
  return readCollection<BlogFrontmatter>('blog').sort(
    (a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date),
  );
}

export function getBlogPost(slug: string): Doc<BlogFrontmatter> | undefined {
  return getBlogPosts().find((p) => p.slug === slug);
}

export function getCaseStudies(): Doc<CaseStudyFrontmatter>[] {
  return readCollection<CaseStudyFrontmatter>('case-studies').sort(
    (a, b) => +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date),
  );
}

export function getCaseStudy(slug: string): Doc<CaseStudyFrontmatter> | undefined {
  return getCaseStudies().find((c) => c.slug === slug);
}

export function formatDate(iso: string): string {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
