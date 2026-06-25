/** Company data -- leadership and open roles. */
import type { IconName } from './types';

export type Leader = {
  name: string;
  role: string;
  bio: string;
  focus: string;
  photo?: string;
  linkedin?: string;
};

export type Principle = {
  icon: IconName;
  title: string;
  description: string;
};

export const leadershipPrinciples: Principle[] = [
  {
    icon: 'sparkles',
    title: 'Innovation',
    description: 'We foster a culture of continuous innovation and technological advancement.',
  },
  {
    icon: 'users',
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and cross-functional collaboration.',
  },
  {
    icon: 'barChart',
    title: 'Excellence',
    description: 'We strive for excellence in everything we do, from product development to customer service.',
  },
  {
    icon: 'shield',
    title: 'Integrity',
    description: 'We maintain the highest standards of integrity and ethical business practices.',
  },
];

export const leadership: Leader[] = [
  {
    name: 'Shomiron Das Gupta',
    role: 'Founder & Chief Executive Officer',
    focus: 'Vision & strategy',
    photo: '/images/shomiron-das-gupta.jpg',
    linkedin: 'https://www.linkedin.com/in/shomirondg',
    bio: 'Shomiron is a highly experienced Intrusion Analyst and cybersecurity leader. As Founder and CEO of Bloo, he brings deep expertise in threat detection and security operations, having dedicated his career to building innovative security solutions that help organizations stay ahead of evolving threats.',
  },
  {
    name: 'Santosh Vishwanath',
    role: 'Chief Technology Officer',
    focus: 'Architecture & platform',
    photo: '/images/Santosh-Vishwanath.jpeg',
    linkedin: 'https://www.linkedin.com/in/santoshvishwanath',
    bio: "Santosh is a technology leader with over 17 years of experience building secure, scalable systems. At Symantec, he played a key role in their Managed Security Services, helping deliver threat detection and response for some of the world's largest organizations. Today at Bloo, he is the architect behind our core technology platform powering our Managed Detection & Response service.",
  },
  {
    name: 'Kuldeep Raina',
    role: 'Chief Revenue Officer',
    focus: 'Growth & strategic alliances',
    photo: '/images/kuldeep.png',
    linkedin: 'https://www.linkedin.com/in/kuldeep-raina',
    bio: "Kuldeep brings 28 years of cybersecurity leadership across India, APAC, and MEA, having driven revenue and partnerships at McAfee, Cisco, Symantec, Sophos, Gigamon, and Seqrite. At Bloo, he leads global go-to-market strategy, enterprise growth, and the strategic alliances that position Bloo's AI-driven SecOps platform at the forefront of telemetry intelligence.",
  },
];

export type Role = {
  title: string;
  team: string;
  location: string;
  type: string;
  remote: boolean;
  summary: string;
};

export const openRoles: Role[] = [
  { title: 'Senior Backend Engineer', team: 'Platform', location: 'Remote (Global)', type: 'Full-time', remote: true, summary: 'Build the cloud-scale datalake and ingestion pipeline that retains full-fidelity telemetry at predictable cost.' },
  { title: 'Detection Engineer', team: 'Security Research', location: 'Remote (Global)', type: 'Full-time', remote: true, summary: 'Author and maintain streaming detection workbooks that keep coverage ahead of the threat landscape.' },
  { title: 'AI / ML Engineer', team: 'Applied AI', location: 'San Francisco, CA', type: 'Full-time', remote: false, summary: 'Advance the agentic systems behind Crucible and SynthAI -- decomposition, reasoning, and evidence-backed synthesis.' },
  { title: 'Enterprise Account Executive', team: 'Revenue', location: 'New York, NY', type: 'Full-time', remote: false, summary: 'Help security leaders adopt Bloo as their system of record for telemetry across regulated industries.' },
  { title: 'Site Reliability Engineer', team: 'Platform', location: 'Remote (Global)', type: 'Full-time', remote: true, summary: 'Operate multi-tenant and customer-deployed environments on Kubernetes with sovereignty by construction.' },
  { title: 'Product Designer', team: 'Product', location: 'Remote (EU)', type: 'Full-time', remote: true, summary: 'Design the War Room and investigation experiences that keep humans in command of autonomous systems.' },
];

export const partnerTypes = [
  { icon: 'handshake' as const, title: 'MSSP & MDR partners', description: "Deliver detection, investigation and response for many clients on one multi-tenant platform with per-tenant isolation by construction." },
  { icon: 'cloud' as const, title: 'Cloud providers', description: "Bloo runs inside the customer's own AWS, Azure or GCP environment -- co-sell to enterprises modernizing their security data stack." },
  { icon: 'plug' as const, title: 'Technology integrations', description: 'Join the 1,200+ integration catalog across SIEM, EDR, identity, cloud and threat intelligence with a common adapter SDK.' },
  { icon: 'briefcase' as const, title: 'Resellers & system integrators', description: 'Bring Telemetry Intelligence to your customers with onboarding, enablement and detection-content support.' },
];
