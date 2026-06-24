import type { Metadata } from 'next';
import { siteConfig } from './site';

type SeoArgs = {
  title: string;
  description: string;
  /** Path beginning with "/", used for canonical + og:url. */
  path: string;
  /** Optional OG image path (defaults to the dynamic site OG image). */
  image?: string;
  type?: 'website' | 'article';
  /** Set true on thin/utility pages (e.g. legal index helpers) to deindex. */
  noindex?: boolean;
  keywords?: string[];
};

/**
 * Single helper that produces a complete, consistent Metadata object:
 * canonical URL, Open Graph, Twitter card and robots directives.
 * Title is kept ≤60 chars at the call site; description ≤155.
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  type = 'website',
  noindex = false,
  keywords,
}: SeoArgs): Metadata {
  const url = `${siteConfig.url}${path === '/' ? '' : path}`;
  const ogImage = image || `${siteConfig.url}/opengraph-image`;

  return {
    // Absolute so the root "%s | Bloo" template never double-brands titles
    // that already include the brand and are authored to be ≤60 chars.
    title: { absolute: title },
    description,
    keywords,
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
        },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${siteConfig.name}  -  ${siteConfig.tagline}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      site: '@bloo',
    },
  };
}
