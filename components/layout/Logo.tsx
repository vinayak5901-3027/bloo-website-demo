import Image from 'next/image';
import clsx from 'clsx';

/**
 * Theme-aware Bloo wordmark.
 * Renders both lockups; CSS (see globals.css .logo-on-dark / .logo-on-light)
 * shows the white logo in the ink room and the colour logo in the paper room.
 */
export function Logo({
  width = 92,
  height = 35,
  priority = false,
  className,
}: {
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}) {
  return (
    <span className={clsx('inline-flex items-center', className)}>
      {/* Ink room (default): preload via priority when requested. */}
      <Image
        src="/assets/bloo-white-logo.png"
        alt="Bloo"
        width={width}
        height={height}
        priority={priority}
        className="logo-on-dark"
      />
      {/* Paper room: load eagerly (not lazily) so toggling never shows a gap. */}
      <Image
        src="/assets/bloo-logo-1.png"
        alt="Bloo"
        width={width}
        height={height}
        loading="eager"
        className="logo-on-light"
      />
    </span>
  );
}
