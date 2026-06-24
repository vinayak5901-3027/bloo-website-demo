import type { SolutionContent } from './types';

/** Solution (use-case) content. Drives /solutions/[slug]. */
export const solutions: SolutionContent[] = [
  {
    slug: 'threat-detection',
    name: 'Threat detection & response',
    eyebrow: 'SOLUTION · DETECTION & RESPONSE',
    hero: {
      headline: 'Detect earlier. Investigate faster. Respond with',
      headlineEmphasis: 'confidence.',
      sub: 'Run 600+ streaming detections against years of full-fidelity history, link related signals into campaigns, and respond through validated playbooks  -  on one platform.',
    },
    problem: {
      heading: 'Detection is only as good as the history it runs against',
      intro:
        'Adversaries dwell for months while most SIEMs keep 90–180 days of hot history. When detection content is stale and retention is short, real threats slip past  -  and investigations stall the moment they reach data you no longer keep.',
      points: [
        { title: 'Short memory, missed threats', description: 'You cannot hunt what you discarded. Short retention turns yesterday’s blind spot into today’s breach.' },
        { title: 'Alert fatigue', description: 'Disconnected alerts bury the signal. Analysts triage noise instead of investigating campaigns.' },
        { title: 'Slow, manual response', description: 'Without validated automation, response is inconsistent and depends on who is on shift.' },
      ],
    },
    outcomes: {
      eyebrow: 'OUTCOMES',
      heading: 'What changes when detection runs on memory',
      items: [
        { icon: 'shield', title: 'Always-current detection', description: '600+ workbooks update continuously with the threat landscape, which means coverage tracks adversaries automatically.' },
        { icon: 'history', title: 'Hunt across years', description: 'Full-fidelity hot retention means investigations never dead-end at missing data.' },
        { icon: 'network', title: 'Campaign-level context', description: 'Connected Signals links related detections, which means analysts see incidents, not fragments.' },
        { icon: 'workflow', title: 'Validated response', description: 'SOAR playbooks execute consistent, approved actions, which means faster containment with an audit trail.' },
      ],
    },
    stats: [
      { value: '70%', label: 'Analyst time optimized', tone: 'accent' },
      { value: '600+', label: 'Streaming detections' },
      { value: '1–5 yr', label: 'Hot, searchable history' },
    ],
    steps: {
      eyebrow: 'HOW BLOO DELIVERS IT',
      heading: 'Detection, correlation and response on one datalake',
      steps: [
        { title: 'Capture everything', description: 'Full-fidelity telemetry lands in Datafabric and is enriched inline.' },
        { title: 'Detect in real time', description: 'Streaming workbooks evaluate every event against current detection content.' },
        { title: 'Correlate into campaigns', description: 'Connected Signals groups related detections with cognitive ML.' },
        { title: 'Respond with playbooks', description: 'Validated SOAR actions contain the threat across your stack.' },
      ],
    },
    products: ['bloo-vantage', 'datafabric', 'crucible'],
    faqs: [
      { q: 'How far back can we hunt?', a: 'Against 1–5 years of full-fidelity hot history by default  -  so investigations run on complete truth rather than the last few weeks of logs.' },
      { q: 'Does Bloo replace our existing detection content?', a: 'Bloo ships 600+ active detection workbooks updated continuously with the threat landscape, and you can author your own with Python, Bloo Query Language and AI Blocks.' },
      { q: 'Can response be automated safely?', a: 'Yes. SOAR playbooks validate actions before execution, and with Crucible, production-impacting steps require explicit human approval.' },
    ],
    meta: {
      title: 'Threat Detection & Response | Bloo',
      description: 'Detect earlier and respond faster with 600+ streaming detections, years of hot retention, and validated response playbooks on one Bloo platform.',
      keyword: 'threat detection and response',
    },
  },
  {
    slug: 'compliance-monitoring',
    name: 'Compliance monitoring',
    eyebrow: 'SOLUTION · COMPLIANCE',
    hero: {
      headline: 'Audit-ready evidence and long-term retention,',
      headlineEmphasis: 'by default.',
      sub: 'Retain full-fidelity logs for years at predictable cost, prove control coverage on demand, and turn every investigation into a complete, exportable evidence trail.',
    },
    problem: {
      heading: 'Compliance fails where logs expire',
      intro:
        'Frameworks demand long retention and provable monitoring, but ingestion-priced platforms make full, long-term logging unaffordable  -  so teams sample, shorten retention, and scramble at audit time.',
      points: [
        { title: 'Retention gaps', description: 'Short or sampled retention cannot satisfy multi-year evidence requirements.' },
        { title: 'Manual evidence gathering', description: 'Audits become fire drills when evidence is scattered across tools.' },
        { title: 'Unpredictable cost', description: 'Logging everything you must keep triggers ingestion penalties.' },
      ],
    },
    outcomes: {
      eyebrow: 'OUTCOMES',
      heading: 'Compliance as a byproduct of good architecture',
      items: [
        { icon: 'clock', title: 'Years of hot retention', description: 'Keep up to 120 months online, which means multi-year evidence is always queryable.' },
        { icon: 'fileCheck', title: 'Complete audit trail', description: 'Every action and decision is recorded, which means audit prep shrinks from weeks to days.' },
        { icon: 'scale', title: 'Predictable economics', description: 'No ingestion penalties, which means complete logging never blows the budget.' },
        { icon: 'lock', title: 'Data residency & sovereignty', description: 'Run in your own cloud or bare metal, which means you control where regulated data lives.' },
      ],
    },
    stats: [
      { value: '120 mo', label: 'Online retention', tone: 'accent' },
      { value: '0', label: 'Ingestion penalties' },
      { value: 'Weeks→days', label: 'Faster audit prep' },
    ],
    products: ['bloo-onprem-siem', 'datafabric', 'bloo-vantage'],
    faqs: [
      { q: 'Which frameworks does Bloo support?', a: 'Bloo provides the long-term retention, monitoring evidence and audit trail required across frameworks such as PCI DSS, HIPAA, SOC 2, GDPR, DORA and NIST. Controls map to your specific obligations.' },
      { q: 'How long can we keep evidence?', a: 'Up to 120 months (10 years) of online, queryable retention  -  with up to 98% compression keeping the cost predictable.' },
      { q: 'Can we keep regulated data in-region?', a: 'Yes. Deploy SaaS in available residency regions, or run Bloo Bare Metal entirely inside your own bare metal so data never leaves your walls.' },
    ],
    meta: {
      title: 'Compliance Monitoring | Bloo',
      description: 'Meet retention and audit requirements with years of hot, queryable logs, a complete evidence trail, and data residency  -  at predictable cost.',
      keyword: 'compliance monitoring platform',
    },
  },
  {
    slug: 'soc-automation',
    name: 'SOC automation',
    eyebrow: 'SOLUTION · SOC AUTOMATION',
    hero: {
      headline: 'Automate tier-1 triage. Free analysts for',
      headlineEmphasis: 'real threats.',
      sub: 'Crucible investigates every signal with a fleet of specialist AI agents, clusters related alerts into incidents, and proposes response  -  keeping humans in command of every consequential action.',
    },
    problem: {
      heading: 'Headcount cannot scale with alert volume',
      intro:
        'SOC teams drown in alerts. Hiring cannot keep pace, and manual triage burns senior analysts on noise. The answer is not more people  -  it is consistent, machine-speed investigation with human oversight.',
      points: [
        { title: 'Untriaged alerts', description: 'Most alerts go untouched; real threats hide in the backlog.' },
        { title: 'Analyst burnout', description: 'Repetitive triage drives attrition on the team you can least afford to lose.' },
        { title: 'Inconsistent quality', description: 'Investigation depth depends on who caught the alert and when.' },
      ],
    },
    outcomes: {
      eyebrow: 'OUTCOMES',
      heading: 'A repeatable investigation for every signal',
      items: [
        { icon: 'bot', title: 'Investigate everything', description: 'Specialist agents triage every signal, which means nothing goes untouched.' },
        { icon: 'network', title: 'Incidents, not alerts', description: 'Related signals coagulate into unified incidents, which means analysts work a handful of real cases.' },
        { icon: 'shield', title: 'Human-in-the-loop', description: 'Consequential actions wait for approval, which means speed without losing control.' },
        { icon: 'refresh', title: 'Continuous learning', description: 'False-positive rates and overrides improve playbooks, which means the system gets better over time.' },
      ],
    },
    stats: [
      { value: 'Every', label: 'Signal investigated', tone: 'accent' },
      { value: '15-min', label: 'Average response' },
      { value: '0', label: 'Added headcount' },
    ],
    products: ['crucible', 'bloo-vantage', 'synthai'],
    faqs: [
      { q: 'Will automation take risky actions on its own?', a: 'No. Crucible auto-executes only safe, reversible steps. Production-impacting actions always require explicit human approval through the approvals queue.' },
      { q: 'How quickly can we see value?', a: 'Crucible plugs into your existing stack via 1,200+ integrations and begins triaging signals immediately  -  teams report tier-1 triage largely automated without adding headcount.' },
      { q: 'Does it work with our current SIEM?', a: 'Yes. Crucible ingests from SIEMs, EDR, cloud, email and identity systems, so it augments your existing investments rather than replacing them.' },
    ],
    meta: {
      title: 'SOC Automation | Bloo Crucible',
      description: 'Automate tier-1 triage with a fleet of specialist AI agents that investigate every signal and propose response  -  with humans in command.',
      keyword: 'SOC automation platform',
    },
  },
  {
    slug: 'siem-modernization',
    name: 'SIEM modernization',
    eyebrow: 'SOLUTION · SIEM MODERNIZATION',
    hero: {
      headline: 'Replace or augment a legacy SIEM  - ',
      headlineEmphasis: 'without ingestion penalties.',
      sub: 'Move to a cloud-scale datalake that lets you log everything, keep it hot for years, and cut composite cost below Bare Metal  -  with detection, analytics and automation built in.',
    },
    problem: {
      heading: 'Legacy SIEM economics force bad security decisions',
      intro:
        'Ingestion-based pricing makes full visibility unaffordable, so teams drop sources and shorten retention. The platform meant to protect you ends up engineering your blind spots.',
      points: [
        { title: 'Pay-to-see pricing', description: 'Every new source raises the bill, so coverage is rationed instead of complete.' },
        { title: 'Tool sprawl', description: 'SIEM, UEBA and SOAR as separate products multiply cost and integration overhead.' },
        { title: 'Operational drag', description: 'Database and big-data administrators are needed just to keep the lights on.' },
      ],
    },
    outcomes: {
      eyebrow: 'OUTCOMES',
      heading: 'Modern SIEM without the legacy tax',
      items: [
        { icon: 'scale', title: 'Log everything', description: 'No ingestion penalties, which means coverage is a security decision, not a budget one.' },
        { icon: 'layers', title: 'Consolidated stack', description: 'SIEM, user analytics and automation on one datalake, which means fewer tools to license and operate.' },
        { icon: 'cloud', title: 'Zero ops overhead', description: 'No database administrators required, which means your team focuses on security, not infrastructure.' },
        { icon: 'gauge', title: 'Lower composite cost', description: 'Cost below Bare Metal deployments, which means modernization that pays for itself.' },
      ],
    },
    stats: [
      { value: '60%', label: 'Cost reduction', tone: 'accent' },
      { value: '11→1', label: 'Tools consolidated' },
      { value: 'Minutes', label: 'To operational' },
    ],
    products: ['bloo-vantage', 'bloo-onprem-siem', 'datafabric'],
    faqs: [
      { q: 'Do we rip and replace, or run side by side?', a: 'Either. Bloo can replace a legacy SIEM outright or run alongside it  -  forwarding detections and serving as the long-term, low-cost datalake while you migrate.' },
      { q: 'How is the cost lower?', a: 'Pricing scales with retention time, not ingestion volume, and up to 98% compression cuts storage  -  so composite cost lands below typical Bare Metal deployments.' },
      { q: 'What about our existing detection content?', a: 'Bloo ships 600+ workbooks and supports custom detections in Python, Bloo Query Language and Spark SQL, so you can migrate logic without starting from zero.' },
    ],
    meta: {
      title: 'SIEM Modernization | Bloo',
      description: 'Replace or augment a legacy SIEM with a cloud-scale datalake  -  log everything, keep it hot for years, and cut composite cost with no ingestion penalties.',
      keyword: 'SIEM replacement and modernization',
    },
  },
  {
    slug: 'managed-security-services',
    name: 'Managed security services',
    eyebrow: 'SOLUTION · MSSP & MDR ENABLEMENT',
    hero: {
      headline: 'The substrate MSSP and MDR teams',
      headlineEmphasis: 'build on.',
      sub: 'Deliver detection, investigation and response for many customers on one multi-tenant platform  -  with full-fidelity memory, autonomous triage, and per-tenant isolation by construction.',
    },
    problem: {
      heading: 'Service margins erode on legacy tooling',
      intro:
        'MSSPs and MDR providers are squeezed between client expectations and platform economics. Ingestion pricing caps coverage, manual triage caps scale, and weak tenant isolation caps trust.',
      points: [
        { title: 'Per-tenant cost', description: 'Ingestion pricing makes full-fidelity coverage unaffordable per client.' },
        { title: 'Analyst-bound scale', description: 'Manual triage means adding clients means adding headcount.' },
        { title: 'Isolation risk', description: 'Multi-tenant data leakage is an existential risk to a service brand.' },
      ],
    },
    outcomes: {
      eyebrow: 'OUTCOMES',
      heading: 'Scale clients, not cost',
      items: [
        { icon: 'users', title: 'Multi-tenant by design', description: 'Every lookup is scoped by tenant with keys sealed in Vault, which means isolation is architectural, not configured.' },
        { icon: 'bot', title: 'Autonomous triage', description: 'Crucible investigates every signal, which means you scale clients without scaling analysts linearly.' },
        { icon: 'scale', title: 'Predictable margins', description: 'No ingestion penalties, which means coverage and profitability coexist.' },
        { icon: 'handshake', title: 'White-glove enablement', description: 'Co-sell, onboarding and detection-content support, which means faster time to value for your clients.' },
      ],
    },
    stats: [
      { value: '1,200+', label: 'Integrations', tone: 'accent' },
      { value: 'Per-tenant', label: 'Cryptographic isolation' },
      { value: '24/7', label: 'Coverage model' },
    ],
    products: ['datafabric', 'crucible', 'bloo-vantage'],
    faqs: [
      { q: 'Is Bloo built for multi-tenant delivery?', a: 'Yes. Every database lookup and model call is scoped by tenant and scope ID, with API keys sealed in unique Vault paths  -  cross-tenant access is architecturally impossible.' },
      { q: 'How does this improve our service margins?', a: 'No ingestion penalties means you can offer full-fidelity coverage affordably, and autonomous triage lets you add clients without adding analysts at the same rate.' },
      { q: 'Do you support co-sell and partner enablement?', a: 'Yes  -  through the Bloo partner program, including onboarding, detection-content support and co-sell motions. See the Partners page for details.' },
    ],
    meta: {
      title: 'Managed Security Services | Bloo for MSSP & MDR',
      description: 'Power MSSP and MDR delivery on one multi-tenant platform  -  full-fidelity memory, autonomous triage, and per-tenant isolation by construction.',
      keyword: 'MSSP MDR security platform',
    },
  },
];

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
