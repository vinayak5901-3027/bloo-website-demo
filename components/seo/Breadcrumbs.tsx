import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Container } from '@/components/ui/Section';
import { JsonLd } from './JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export type Crumb = { name: string; path: string };

/** Visible breadcrumb nav + matching BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: 'Home', path: '/' }, ...items];
  return (
    <>
      <JsonLd data={breadcrumbSchema(full)} />
      <div className="border-b border-border/60 bg-bg">
        <Container>
          <nav aria-label="Breadcrumb" className="py-3.5">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
              {full.map((item, i) => {
                const last = i === full.length - 1;
                return (
                  <li key={item.path} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight size={14} className="text-border" aria-hidden="true" />}
                    {last ? (
                      <span aria-current="page" className="text-body">
                        {item.name}
                      </span>
                    ) : (
                      <Link href={item.path} className="transition-colors hover:text-secondary">
                        {item.name}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </Container>
      </div>
    </>
  );
}
