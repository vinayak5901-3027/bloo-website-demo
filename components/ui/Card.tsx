import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { Icon } from './Icon';
import type { IconName } from '@/data/types';

export function Card({
  children,
  className,
  href,
  hover = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  hover?: boolean;
  id?: string;
}) {
  const cls = clsx(
    'rounded-lg border border-border bg-surface/70 p-6 sm:p-7 transition-all duration-200 ease-brand',
    (hover || href) && 'hover:border-secondary/60 hover:bg-surface-2 hover:-translate-y-1 hover:shadow-2',
    className,
  );
  if (href) {
    return (
      <Link id={id} href={href} className={clsx(cls, 'group block')}>
        {children}
      </Link>
    );
  }
  return (
    <div id={id} className={cls}>
      {children}
    </div>
  );
}

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: IconName;
  title: string;
  description: string;
}) {
  return (
    <Card hover className="h-full">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
        <Icon name={icon} size={22} />
      </span>
      <h3 className="card-title mt-5">{title}</h3>
      <p className="mt-3 t-desc text-body leading-relaxed">{description}</p>
    </Card>
  );
}

export function LinkCard({
  icon,
  title,
  description,
  href,
}: {
  icon?: IconName;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card href={href} className="flex h-full flex-col">
      {icon && (
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-gradient-brand-soft text-secondary ring-1 ring-secondary/30">
          <Icon name={icon} size={22} />
        </span>
      )}
      <h3 className="card-title mt-5">{title}</h3>
      <p className="mt-3 flex-1 t-desc text-body leading-relaxed">{description}</p>
      <span className="mt-5 inline-flex w-full items-center justify-end gap-1.5 text-sm font-bold text-secondary transition-colors group-hover:text-bright">
        View
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Card>
  );
}
