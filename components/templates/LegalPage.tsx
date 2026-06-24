import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { JsonLd } from '@/components/seo/JsonLd';
import { Container } from '@/components/ui/Section';
import { webPageSchema } from '@/lib/schema';

export function LegalPage({
  title,
  path,
  description,
  lastUpdated,
  children,
}: {
  title: string;
  path: string;
  description: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd data={webPageSchema({ title, description, path })} />
      <Breadcrumbs items={[{ name: title, path }]} />
      <Container className="py-12 lg:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-black tracking-tightish text-bright">{title}</h1>
          <p className="mt-3 font-mono text-xs uppercase tracking-widecaps text-muted">
            Last updated · {lastUpdated}
          </p>
          <div className="prose-bloo mt-8 max-w-none">{children}</div>
        </div>
      </Container>
    </>
  );
}
