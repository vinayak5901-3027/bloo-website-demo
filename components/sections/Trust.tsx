import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { ProductLogo } from '@/components/ui/ProductLogo';
import { getProduct } from '@/data/products';

/** Trust strip  -  industry tags + control message (no fabricated logos). */
export function TrustStrip() {
  const sectors = ['Financial services', 'Healthcare', 'Public sector', 'Technology & SaaS', 'Manufacturing', 'Retail'];
  return (
    <div className="border-y border-border bg-surface/40">
      <Container className="py-8">
        <div className="flex flex-col items-center justify-center gap-5 text-center lg:flex-row lg:items-center lg:justify-between">
          <p className="font-mono uppercase tracking-widecaps text-muted" style={{fontSize: '20px'}}>
            Trusted by security teams across
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {sectors.map((s) => (
              <li key={s} className="font-bold text-body/80" style={{fontSize: '20px'}}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

/** Related products grid  -  links to other platform pages. */
export function RelatedProducts({ slugs, heading = 'Explore the platform' }: { slugs: string[]; heading?: string }) {
  const items = slugs.map(getProduct).filter(Boolean);
  if (!items.length) return null;
  return (
    <Section>
      <Container>
        <div className="flex items-end justify-between gap-4">
          <SectionHeading eyebrow="THE PLATFORM" title={heading} />
          <Link
            href="/platform"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-bold text-secondary hover:text-bright sm:inline-flex"
          >
            All products <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="cards-carousel mt-10">
          {items.map((p, i) => (
            <Reveal key={p!.slug} delay={(i % 4) * 70}>
              <Card href={`/platform/${p!.slug}`} className="group flex h-full flex-col">
                <div className="mb-4">
                  <ProductLogo slug={p!.slug} height={52} />
                </div>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{p!.meta.description}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-secondary transition-colors group-hover:text-bright">
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
