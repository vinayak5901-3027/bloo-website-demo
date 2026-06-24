import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';
import { products } from '@/data/products';
import { solutions } from '@/data/solutions';
import { getBlogPosts, getCaseStudies } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, freq: 'weekly' },
    { path: '/platform', priority: 0.9, freq: 'monthly' },
    { path: '/solutions', priority: 0.9, freq: 'monthly' },
    { path: '/industries', priority: 0.8, freq: 'monthly' },
    { path: '/resources', priority: 0.7, freq: 'weekly' },
    { path: '/blog', priority: 0.8, freq: 'weekly' },
    { path: '/case-studies', priority: 0.8, freq: 'monthly' },
    { path: '/integrations', priority: 0.7, freq: 'monthly' },
    { path: '/docs', priority: 0.6, freq: 'monthly' },
    { path: '/support', priority: 0.5, freq: 'monthly' },
    { path: '/pricing', priority: 0.7, freq: 'monthly' },
    { path: '/about', priority: 0.7, freq: 'monthly' },
    { path: '/leadership', priority: 0.5, freq: 'monthly' },
    { path: '/careers', priority: 0.6, freq: 'weekly' },
    { path: '/partners', priority: 0.6, freq: 'monthly' },
    { path: '/contact', priority: 0.6, freq: 'yearly' },
    { path: '/request-demo', priority: 0.9, freq: 'yearly' },
    { path: '/privacy-policy', priority: 0.3, freq: 'yearly' },
    { path: '/terms', priority: 0.3, freq: 'yearly' },
    { path: '/cookie-policy', priority: 0.3, freq: 'yearly' },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path === '/' ? '' : r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  products.forEach((p) =>
    entries.push({ url: `${base}/platform/${p.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 }),
  );
  solutions.forEach((s) =>
    entries.push({ url: `${base}/solutions/${s.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 }),
  );
  getBlogPosts().forEach((p) =>
    entries.push({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.frontmatter.date),
      changeFrequency: 'yearly',
      priority: 0.6,
    }),
  );
  getCaseStudies().forEach((c) =>
    entries.push({
      url: `${base}/case-studies/${c.slug}`,
      lastModified: new Date(c.frontmatter.date),
      changeFrequency: 'yearly',
      priority: 0.6,
    }),
  );

  return entries;
}
