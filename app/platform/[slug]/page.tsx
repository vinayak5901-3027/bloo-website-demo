import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ProductPage } from '@/components/templates/ProductPage';
import { products, getProduct } from '@/data/products';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};
  return buildMetadata({
    title: product.meta.title,
    description: product.meta.description,
    path: `/platform/${product.slug}`,
    keywords: [product.meta.keyword, 'Bloo', 'telemetry intelligence'],
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();
  return <ProductPage product={product} />;
}
