'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import clsx from 'clsx';

/** Demo-only newsletter signup. Validates email client-side, shows success. */
export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Enter a valid work email address.');
      return;
    }
    setError('');
    setDone(true);
  };

  if (done) {
    return (
      <p className={clsx('flex items-center gap-2 text-sm text-success', className)} role="status">
        <Check size={16} /> Subscribed. Watch your inbox for the next brief.
      </p>
    );
  }

  return (
    <form className={className} onSubmit={submit} noValidate>
      <div className="flex overflow-hidden rounded-sm border border-border bg-surface focus-within:border-secondary">
        <label htmlFor="newsletter-email" className="sr-only">
          Work email
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          className="min-w-0 flex-1 bg-transparent px-3.5 py-2.5 text-sm text-body placeholder:text-muted focus:outline-none"
          aria-describedby={error ? 'newsletter-error' : undefined}
          aria-invalid={!!error}
        />
        <button
          type="submit"
          className="flex items-center gap-1.5 bg-accent px-4 text-sm font-bold text-bg transition-[filter] hover:brightness-105"
          aria-label="Subscribe"
        >
          <ArrowRight size={16} />
        </button>
      </div>
      {error && (
        <p id="newsletter-error" className="mt-2 text-xs text-error" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
