import clsx from 'clsx';

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={clsx('container-bloo', className)}>{children}</div>;
}

export function Section({
  children,
  className,
  alt = false,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  /** Use the slightly lifted surface background. */
  alt?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={clsx('section-pad relative', alt && 'bg-surface/40 border-y border-border', className)}
    >
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={clsx('eyebrow mb-4', className)}>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={clsx(
        align === 'center' && 'mx-auto max-w-3xl text-center',
        align === 'center' && '[&_.eyebrow]:justify-center',
        'max-w-3xl',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-black tracking-tightish text-bright">{title}</h2>
      {intro && <p className={clsx('subtitle mt-5', align === 'center' && 'mx-auto text-center')}>{intro}</p>}
    </div>
  );
}
