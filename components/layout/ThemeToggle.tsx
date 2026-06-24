'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import clsx from 'clsx';

/**
 * Ink ⇄ Paper room switch. Reads the current theme from the <html data-theme>
 * attribute (set pre-paint by the inline script in layout.tsx), flips it, and
 * persists the choice to localStorage. Renders a stable icon until mounted to
 * avoid a hydration mismatch.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('bloo-theme', next);
    } catch {
      /* private mode / storage disabled  -  non-fatal */
    }
  };

  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={clsx(
        'inline-flex h-11 w-11 items-center justify-center rounded-sm text-body transition-colors',
        'hover:bg-surface-2 hover:text-bright focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary',
        className,
      )}
    >
      {mounted && theme === 'dark' ? (
        <Sun size={19} aria-hidden="true" />
      ) : (
        <Moon size={19} aria-hidden="true" />
      )}
    </button>
  );
}
