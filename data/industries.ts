import type { Industry } from './types';

/** Industry verticals for the /industries page. */
export const industries: Industry[] = [
  {
    slug: 'financial-services',
    name: 'Financial services',
    icon: 'building',
    summary:
      'Protect high-value transactions and customer data while satisfying some of the strictest retention and resilience mandates in any sector.',
    pains: [
      'Long-dwell, well-funded adversaries targeting payment and trading systems',
      'Multi-year evidence requirements that short retention cannot meet',
      'Operational-resilience expectations on detection and response times',
    ],
    compliance: ['PCI DSS', 'SOC 2', 'DORA', 'GLBA', 'ISO 27001'],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & life sciences',
    icon: 'heart',
    summary:
      'Defend patient data and connected medical systems with full visibility and audit-ready evidence  -  without ballooning logging cost.',
    pains: [
      'Ransomware targeting care-delivery and clinical systems',
      'Sprawling device and identity footprint that is hard to monitor',
      'Strict privacy obligations on protected health information',
    ],
    compliance: ['HIPAA', 'HITRUST', 'SOC 2', 'GDPR'],
  },
  {
    slug: 'public-sector',
    name: 'Public sector & government',
    icon: 'scale',
    summary:
      'Sovereign-grade detection and memory that runs inside your own bare metal  -  because some data can never leave national or agency boundaries.',
    pains: [
      'Nation-state adversaries with multi-year dwell times',
      'Data-sovereignty and air-gap requirements',
      'Detection only as good as the history it runs against',
    ],
    compliance: ['NIST 800-53', 'FedRAMP-aligned', 'CJIS', 'Data residency'],
  },
  {
    slug: 'technology-saas',
    name: 'Technology & SaaS',
    icon: 'cloud',
    summary:
      'Secure fast-moving, cloud-native infrastructure with a lean team  -  automate triage and keep full-fidelity history as you scale.',
    pains: [
      'Multi-cloud sprawl outpacing a small security team',
      'Alert volume that lean SecOps teams cannot triage manually',
      'Customer-trust and SOC 2 expectations from enterprise buyers',
    ],
    compliance: ['SOC 2', 'ISO 27001', 'GDPR', 'CSA STAR'],
  },
  {
    slug: 'manufacturing',
    name: 'Manufacturing & critical infrastructure',
    icon: 'factory',
    summary:
      'Bridge IT and OT visibility, detect intrusions early, and keep the operational record needed to investigate incidents that threaten uptime.',
    pains: [
      'Converging IT/OT estates with limited monitoring',
      'Downtime cost that makes early detection critical',
      'Legacy systems generating telemetry no one retains',
    ],
    compliance: ['IEC 62443', 'NIST CSF', 'ISO 27001'],
  },
  {
    slug: 'retail-ecommerce',
    name: 'Retail & e-commerce',
    icon: 'cart',
    summary:
      'Protect payment flows and customer accounts across seasonal traffic spikes, with the retention and analytics to investigate fraud and abuse.',
    pains: [
      'Card-data and account-takeover threats at scale',
      'Seasonal spikes that strain ingestion-priced platforms',
      'Fraud investigations that need long historical context',
    ],
    compliance: ['PCI DSS', 'SOC 2', 'GDPR', 'CCPA'],
  },
];
