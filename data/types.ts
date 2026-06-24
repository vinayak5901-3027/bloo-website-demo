/** Shared content types consumed by section components and page templates. */

export type IconName =
  | 'database' | 'shield' | 'search' | 'brain' | 'bot' | 'gauge' | 'lock'
  | 'layers' | 'activity' | 'zap' | 'clock' | 'cloud' | 'server' | 'workflow'
  | 'eye' | 'fileCheck' | 'users' | 'network' | 'gitBranch' | 'alertTriangle'
  | 'scale' | 'globe' | 'cpu' | 'terminal' | 'barChart' | 'bell' | 'key'
  | 'refresh' | 'check' | 'building' | 'heart' | 'factory' | 'cart' | 'radio'
  | 'fingerprint' | 'telescope' | 'history' | 'sparkles' | 'plug' | 'compass'
  | 'list' | 'mail' | 'briefcase' | 'handshake' | 'book';

export type Stat = { value: string; label: string; sub?: string; tone?: 'accent' | 'default' };
export type Feature = { title: string; description: string; icon: IconName };
export type Step = { title: string; description: string };
export type FaqItem = { q: string; a: string };
export type TableRow = { capability: string; description: string };
export type Cta = { label: string; href: string };

export type ProductContent = {
  slug: string;
  name: string;
  eyebrow: string;
  positioning: string;
  hero: { headline: string; headlineEmphasis?: string; sub: string };
  problem?: {
    eyebrow: string;
    heading: string;
    intro: string;
    points: { title: string; description: string }[];
  };
  cardSummary?: string;
  cardTags?: string[];
  stats: { eyebrow?: string; heading?: string; items: Stat[] };
  features: { eyebrow: string; heading: string; intro?: string; items: Feature[] };
  workflow?: { eyebrow: string; heading: string; intro?: string; steps: Step[] };
  capabilities?: { eyebrow: string; heading: string; intro?: string; rows: TableRow[] };
  highlights?: { eyebrow: string; heading: string; items: string[] };
  faqs: FaqItem[];
  related: string[];
  meta: { title: string; description: string; keyword: string };
  pillar: string;
};

export type SolutionContent = {
  slug: string;
  name: string;
  eyebrow: string;
  hero: { headline: string; headlineEmphasis?: string; sub: string };
  problem: { heading: string; intro: string; points: { title: string; description: string }[] };
  outcomes: { eyebrow: string; heading: string; items: Feature[] };
  stats?: Stat[];
  steps?: { eyebrow: string; heading: string; steps: Step[] };
  products: string[]; // related product slugs that power this solution
  faqs: FaqItem[];
  meta: { title: string; description: string; keyword: string };
};

export type Industry = {
  slug: string;
  name: string;
  icon: IconName;
  summary: string;
  pains: string[];
  compliance: string[];
};
