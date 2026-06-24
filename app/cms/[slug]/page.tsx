import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPage, getGlobalConfig } from '@/lib/cms';
import { renderBlocks } from '@/lib/blocks';

interface Props {
  params: { slug: string };
}

// ISR: regenerate the page every 60 seconds in the background when a request arrives
export const revalidate = 60;

// Pre-generate known slugs at build time; unknown slugs are generated on demand (ISR)
export async function generateStaticParams() {
  return ['home', 'about', 'contact', 'leadership', 'pricing'].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [page, global] = await Promise.all([
    getPage(params.slug),
    getGlobalConfig(),
  ]);

  if (!page) return { title: 'Not found' };

  const seo = global?.seo;
  const title = seo?.titleTemplate
    ? seo.titleTemplate.replace('%s', page.title)
    : page.title;

  return {
    title,
    description: seo?.defaultDescription,
    openGraph: {
      title,
      description: seo?.defaultDescription,
      images: seo?.ogImage ? [{ url: seo.ogImage }] : [],
    },
  };
}

export default async function CmsPage({ params }: Props) {
  const page = await getPage(params.slug);
  if (!page) notFound();

  return <>{renderBlocks(page.blocks)}</>;
}
