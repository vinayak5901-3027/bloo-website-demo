'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { primaryNav } from '@/lib/site';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/layout/Logo';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { ProductLogo } from '@/components/ui/ProductLogo';

const productSlugs: Record<string, string> = {
  '/platform/datafabric': 'datafabric',
  '/platform/bloo-vantage': 'bloo-vantage',
  '/platform/synthai': 'synthai',
  '/platform/crucible': 'crucible',
};

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close menus on route change.
  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  // Elevation on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Escape closes; click outside closes desktop dropdown.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, []);

  // Lock body scroll when mobile menu open (iOS-safe: use class instead of inline style).
  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', mobileOpen);
    return () => {
      document.documentElement.classList.remove('menu-open');
    };
  }, [mobileOpen]);

  const isActive = (href?: string) => href && href !== '/' && pathname.startsWith(href);

  return (
    <>
    <header
      ref={headerRef}
      className={clsx(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled || openMenu || mobileOpen
          ? 'border-border bg-bg/90 backdrop-blur-md'
          : 'border-transparent bg-bg/40 backdrop-blur-sm',
      )}
      style={{ height: 'var(--header-height)' }}
    >
      <div className="container-bloo flex h-full items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label="Bloo  -  home">
          <Logo width={88} height={32} priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((group) => {
            const hasMenu = !!group.children;
            const open = openMenu === group.label;
            if (!hasMenu) {
              return (
                <Link
                  key={group.label}
                  href={group.href || '#'}
                  className={clsx(
                    'rounded-sm px-3.5 py-2 text-sm font-bold transition-colors',
                    isActive(group.href) ? 'text-bright' : 'text-body hover:text-bright',
                  )}
                  aria-current={isActive(group.href) ? 'page' : undefined}
                >
                  {group.label}
                </Link>
              );
            }
            return (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(group.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className={clsx(
                    'flex items-center gap-1 rounded-sm px-3.5 py-2 text-sm font-bold transition-colors',
                    open || isActive(group.href) ? 'text-bright' : 'text-body hover:text-bright',
                  )}
                  aria-expanded={open}
                  aria-haspopup="true"
                  onClick={() => setOpenMenu(open ? null : group.label)}
                >
                  {group.label}
                  <ChevronDown
                    size={15}
                    className={clsx('transition-transform', open && 'rotate-180')}
                    aria-hidden="true"
                  />
                </button>
                {open && (
                  <div
                    className={clsx('absolute left-0 top-full pt-3', group.children!.length > 3 ? 'w-[680px]' : 'w-[480px]')}
                    role="menu"
                    aria-label={group.label}
                  >
                    <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-3 animate-fade-in">
                      <div className="flex">
                        {/* Left: overview */}
                        {group.overview && (
                          <Link
                            href={group.overview.href}
                            role="menuitem"
                            className="flex w-[180px] shrink-0 flex-col justify-center border-r border-border bg-gradient-brand-soft p-5 transition-colors hover:bg-surface-2"
                          >
                            <span className="text-base font-bold text-bright">{group.overview.label}</span>
                            {group.overview.description && (
                              <span className="mt-2 block text-sm leading-relaxed text-muted">
                                {group.overview.description}
                              </span>
                            )}
                          </Link>
                        )}
                        {/* Right: children grid */}
                        <ul className="grid flex-1 grid-cols-2 gap-px bg-border p-0">
                          {group.children!.map((child) => {
                            const slug = productSlugs[child.href];
                            return (
                              <li key={child.href} className="bg-surface">
                                <Link
                                  href={child.href}
                                  role="menuitem"
                                  className="flex h-full flex-col p-4 transition-colors hover:bg-surface-2"
                                >
                                  {slug ? (
                                    <ProductLogo slug={slug} height={36} />
                                  ) : (
                                    <span className="text-base font-bold text-bright">{child.label}</span>
                                  )}
                                  {child.description && (
                                    <span className="mt-2 block text-sm leading-relaxed text-muted">
                                      {child.description}
                                    </span>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <Button href="/request-demo" variant="accent" size="md" className="hidden sm:inline-flex">
            Request demo
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm text-bright lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

    </header>

      {/* Mobile menu  -  rendered via portal to escape the header's backdrop-filter stacking context */}
      {mobileOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="lg:hidden fixed inset-x-0 bottom-0 z-[60] overflow-y-auto border-t border-border bg-bg"
          style={{ top: 'var(--header-height)' }}
        >
          <nav className="container-bloo py-5" aria-label="Mobile">
            <ul className="space-y-1">
              {primaryNav.map((group) => {
                const hasMenu = !!group.children;
                const expanded = mobileSection === group.label;
                if (!hasMenu) {
                  return (
                    <li key={group.label}>
                      <Link
                        href={group.href || '#'}
                        className="block rounded-sm px-3 py-3 text-base font-bold text-body hover:bg-surface-2"
                      >
                        {group.label}
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={group.label} className="border-b border-border/60">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-sm px-3 py-3 text-base font-bold text-body"
                      aria-expanded={expanded}
                      onClick={() => setMobileSection(expanded ? null : group.label)}
                    >
                      {group.label}
                      <ChevronDown
                        size={18}
                        className={clsx('transition-transform', expanded && 'rotate-180')}
                        aria-hidden="true"
                      />
                    </button>
                    {expanded && (
                      <ul className="space-y-1 pb-3 pl-3">
                        {group.overview && (
                          <li>
                            <Link href={group.overview.href} className="block rounded-sm px-3 py-2.5 text-sm text-secondary">
                              {group.overview.label}
                            </Link>
                          </li>
                        )}
                        {group.children!.map((child) => {
                          const slug = productSlugs[child.href];
                          return (
                            <li key={child.href}>
                              <Link href={child.href} className="block rounded-sm px-3 py-2.5 text-sm text-muted hover:text-bright">
                                {slug ? <ProductLogo slug={slug} height={32} /> : child.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
            <div className="mt-6">
              <Button href="/request-demo" variant="accent" size="lg" className="w-full">
                Request demo
              </Button>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
