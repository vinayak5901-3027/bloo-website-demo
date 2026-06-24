import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SolutionPage } from '@/components/templates/SolutionPage';
import { solutions, getSolution } from '@/data/solutions';
import { buildMetadata } from '@/lib/seo';

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = getSolution(params.slug);
  if (!solution) return {};
  return buildMetadata({
    title: solution.meta.title,
    description: solution.meta.description,
    path: `/solutions/${solution.slug}`,
    keywords: [solution.meta.keyword, 'Bloo'],
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const solution = getSolution(params.slug);
  if (!solution) notFound();
  return <SolutionPage solution={solution} />;
}
