import Link from 'next/link';
import { Container } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Eyebrow } from '@/components/ui/Section';

const suggestions = [
  { label: 'Platform', href: '/platform' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Blog', href: '/blog' },
  { label: 'Case studies', href: '/case-studies' },
  { label: 'Contact', href: '/contact' },
];

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <Eyebrow>ERROR 404</Eyebrow>
      <h1 className="font-black tracking-tightish text-bright">
        This page is <span className="italic text-emphasis">missing.</span>
      </h1>
      <p className="mt-5 max-w-md text-lg text-muted">
        The page you’re looking for doesn’t exist or has moved. Bloo keeps history hot for years  - 
        sadly, this URL isn’t one of them.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href="/" variant="accent" size="lg" withArrow>
          Back to home
        </Button>
        <Button href="/platform" variant="ghost" size="lg">
          Explore the platform
        </Button>
      </div>
      <nav aria-label="Helpful links" className="mt-10">
        <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
          {suggestions.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="text-secondary transition-colors hover:text-bright">
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
