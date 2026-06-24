/**
 * Central site configuration  -  edit here to change brand-wide facts,
 * navigation, footer, contact details and social links. Consumed by
 * the header, footer, metadata defaults and JSON-LD schema.
 */

export const siteConfig = {
  name: 'Bloo',
  legalName: 'Bloo Systems, Inc.',
  /** Production canonical origin. Override with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bloo.io').replace(/\/$/, ''),
  // Category / one-liners (Brand Book, Feb 2026  -  canonical lines)
  tagline: 'The system of record for Telemetry Intelligence',
  description:
    'Bloo is the system of record for Telemetry Intelligence  -  full-fidelity logging, detection and AI-driven security operations, at predictable cost.',
  founded: '2021',
  // Trust / proof points reused across the site (legacy proof points).
  proof: {
    compression: '98%',
    retention: '1–5 yr hot',
    costReduction: '60%',
    detectionAccuracy: '99.9%',
    response: '15-min avg',
    coverage: '24/7',
  },
  contact: {
    salesEmail: 'sales@bloo.io',
    supportEmail: 'support@bloo.io',
    pressEmail: 'press@bloo.io',
    phone: '+1 (415) 555-0142',
    addressLine: '535 Mission Street, San Francisco, CA 94105, USA',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/bloo',
    x: 'https://x.com/bloo',
    github: 'https://github.com/bloo',
    youtube: 'https://www.youtube.com/@bloo',
  },
  logo: '/assets/bloo-white-logo.png',
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  label: string;
  href?: string;
  /** Dropdown children  -  when present the item renders as a menu. */
  children?: NavItem[];
  /** A featured/overview link shown first in the dropdown. */
  overview?: NavItem;
};

export const primaryNav: NavGroup[] = [
  {
    label: 'Platform',
    href: '/platform',
    overview: {
      label: 'Platform overview',
      href: '/platform',
      description: 'One datalake. Memory, detection, investigation and autonomous response.',
    },
    children: [
      {
        label: 'Bloo Datafabric',
        href: '/platform/datafabric',
        description: 'The memory layer  -  full-fidelity telemetry, retained and reasoned over.',
      },
      {
        label: 'Bloo SIEM',
        href: '/platform/bloo-vantage',
        description: 'Cloud-native SIEM, user analytics and automation. Detection & investigation.',
      },
      {
        label: 'SynthAI',
        href: '/platform/synthai',
        description: 'Conversational analytics co-pilot. Ask in plain English, get evidence-backed answers.',
      },
      {
        label: 'Crucible',
        href: '/platform/crucible',
        description: 'Autonomous AI SOC  -  investigates every signal, asks before it acts.',
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    overview: {
      label: 'All solutions',
      href: '/solutions',
      description: 'Outcomes by use case  -  from log modernization to autonomous response.',
    },
    children: [
      { label: 'Threat detection & response', href: '/solutions/threat-detection', description: 'Detect earlier, investigate faster, respond with confidence.' },
      { label: 'Compliance monitoring', href: '/solutions/compliance-monitoring', description: 'Audit-ready evidence and long-term retention by default.' },
      { label: 'SOC automation', href: '/solutions/soc-automation', description: 'Automate tier-1 triage and free analysts for real threats.' },
      { label: 'SIEM modernization', href: '/solutions/siem-modernization', description: 'Replace or augment a legacy SIEM without ingestion penalties.' },
      { label: 'Managed security services', href: '/solutions/managed-security-services', description: 'The substrate MSSP and MDR teams build on.' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  {
    label: 'Resources',
    href: '/resources',
    overview: {
      label: 'Resource library',
      href: '/resources',
      description: 'Guides, blog, case studies and documentation for security teams.',
    },
    children: [
      { label: 'Blog', href: '/blog', description: 'Security engineering and telemetry intelligence insights.' },
      { label: 'Case studies', href: '/case-studies', description: 'Measurable results from security teams running Bloo.' },
      { label: 'Documentation', href: '/docs', description: 'Deploy, connect and operate the Bloo platform.' },
      { label: 'Integrations', href: '/integrations', description: '1,200+ connectors across the security stack.' },
      { label: 'Release Notes', href: '/resources/release-note-version0-1', description: 'What shipped in Bloo 1.0  -  Crucible, SynthAI and platform.' },
    ],
  },
  {
    label: 'Company',
    href: '/about',
    overview: {
      label: 'About Bloo',
      href: '/about',
      description: 'Our thesis: telemetry is not exhaust  -  it is enterprise memory.',
    },
    children: [
      { label: 'Leadership', href: '/leadership', description: 'The team building the memory layer.' },
      { label: 'Careers', href: '/careers', description: 'Build foundational security infrastructure.' },
      { label: 'Partners', href: '/partners', description: 'MSSPs, cloud providers and technology integrations.' },
      { label: 'Contact', href: '/contact', description: 'Talk to a security expert.' },
    ],
  },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Platform overview', href: '/platform' },
      { label: 'Bloo Datafabric', href: '/platform/datafabric' },
      { label: 'Bloo SIEM', href: '/platform/bloo-vantage' },
      { label: 'SynthAI', href: '/platform/synthai' },
      { label: 'Crucible', href: '/platform/crucible' },
    ],
  },
  {
    title: 'Solutions & industries',
    links: [
      { label: 'Threat detection & response', href: '/solutions/threat-detection' },
      { label: 'Compliance monitoring', href: '/solutions/compliance-monitoring' },
      { label: 'SOC automation', href: '/solutions/soc-automation' },
      { label: 'SIEM modernization', href: '/solutions/siem-modernization' },
      { label: 'Managed security services', href: '/solutions/managed-security-services' },
      { label: 'Industries', href: '/industries' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Resource library', href: '/resources' },
      { label: 'Blog', href: '/blog' },
      { label: 'Case studies', href: '/case-studies' },
      { label: 'Documentation', href: '/docs' },
      { label: 'Integrations', href: '/integrations' },
      { label: 'Support', href: '/support' },
      { label: 'Release Notes', href: '/release-notes' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About us', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Careers', href: '/careers' },
      { label: 'Partners', href: '/partners' },
      { label: 'Contact', href: '/contact' },
      { label: 'Request a demo', href: '/request-demo' },
    ],
  },
];

export const legalNav: NavItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];
