import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

type Variant = 'accent' | 'primary' | 'ghost' | 'secondary';
type Size = 'md' | 'lg';

const base =
  'inline-flex items-center justify-center gap-2 font-bold rounded-sm transition-all duration-200 ease-brand focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none min-h-[44px]';

const variants: Record<Variant, string> = {
  // Primary CTA  -  paper-on-ink (ink-on-paper in the light room). Per the guide,
  // signal stays scarce even on CTAs, so the primary action is the contrast colour.
  accent:
    'bg-bright text-bg hover:opacity-90 hover:shadow-glow focus-visible:outline-secondary',
  // Brand gradient (dark in both rooms; white text always reads).
  primary:
    'bg-gradient-brand text-white hover:shadow-glow focus-visible:outline-secondary',
  // Hairline ghost  -  secondary action.
  ghost:
    'border border-border text-bright bg-surface/40 hover:bg-surface-2 hover:border-secondary/60 focus-visible:outline-secondary',
  // Signal text link.
  secondary:
    'text-secondary hover:opacity-80 focus-visible:outline-secondary',
};

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  href,
  variant = 'accent',
  size = 'md',
  withArrow = false,
  className,
  children,
  ...rest
}: CommonProps &
  ({ href: string } | { href?: undefined }) &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const cls = clsx(base, variants[variant], sizes[size], className);
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRight size={18} strokeWidth={2} className="shrink-0" aria-hidden="true" />}
    </>
  );
  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  );
}
