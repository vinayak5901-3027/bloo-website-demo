import Image from 'next/image';

const logos: Record<string, { dark: string; light: string }> = {
  datafabric: {
    dark: '/assets/datafabric-logo-transparent.png',
    light: '/assets/datafabric-logo-black-transparent.png',
  },
  'bloo-vantage': {
    dark: '/assets/vantage-logo-transparent.png',
    light: '/assets/vantage-logo-black-transparent.png',
  },
  'bloo-onprem-siem': {
    dark: '/assets/vantage-logo-transparent.png',
    light: '/assets/vantage-logo-black-transparent.png',
  },
  synthai: {
    dark: '/assets/synthai-logo-transparent.png',
    light: '/assets/synthai-logo-black-transparent.png',
  },
  crucible: {
    dark: '/assets/crucible-logo-transparent.png',
    light: '/assets/crucible-logo-black-transparent.png',
  },
};

export function ProductLogo({
  slug,
  height = 36,
  className,
}: {
  slug: string;
  height?: number;
  className?: string;
}) {
  const logo = logos[slug];
  if (!logo) return null;
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <Image
        src={logo.dark}
        alt=""
        width={height * 3.5}
        height={height}
        className="product-logo-dark"
        style={{ height, width: 'auto', objectFit: 'contain' }}
        unoptimized
      />
      <Image
        src={logo.light}
        alt=""
        width={height * 3.5}
        height={height}
        className="product-logo-light"
        style={{ height, width: 'auto', objectFit: 'contain' }}
        unoptimized
      />
    </span>
  );
}
