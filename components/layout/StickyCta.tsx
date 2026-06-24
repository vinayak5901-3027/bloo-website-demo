'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';

/** Mobile-only bottom CTA bar. Hidden on legal/utility pages. */
const HIDE_ON = ['/privacy-policy', '/terms', '/cookie-policy', '/request-demo', '/contact'];

export function StickyCta() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (HIDE_ON.some((p) => pathname === p)) return null;

  return (
    <div
      className={[
        'fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 p-3 backdrop-blur-md transition-transform duration-300 sm:hidden',
        show ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
    >
      <Button href="/request-demo" variant="accent" size="lg" className="w-full" withArrow>
        Request a demo
      </Button>
    </div>
  );
}
