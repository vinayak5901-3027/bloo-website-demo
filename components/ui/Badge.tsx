import clsx from 'clsx';

type Tone = 'accent' | 'secondary' | 'success' | 'amber' | 'muted';

const tones: Record<Tone, string> = {
  accent: 'border-accent/40 text-accent bg-accent/10', // signal
  secondary: 'border-secondary/40 text-secondary bg-secondary/10', // signal
  success: 'border-success/40 text-success bg-success/10',
  amber: 'border-amber/40 text-amber bg-amber/10', // caution / adversary
  muted: 'border-border text-muted bg-surface',
};

export function Badge({
  children,
  tone = 'secondary',
  className,
  dot = false,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
  dot?: boolean;
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-widecaps',
        tones[tone],
        className,
      )}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse-dot" aria-hidden="true" />}
      {children}
    </span>
  );
}
