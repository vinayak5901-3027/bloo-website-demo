import type { ProductContent } from './types';

/**
 * Platform product content. Each object fully drives its /platform/[slug] page.
 * Sourced from the Bloo SIEM, On-Prem SIEM, SynthAI and Crucible datasheets and
 * the Bloo Brand Book. Edit copy here  -  pages re-render automatically.
 */

export const products: ProductContent[] = [
  // ─────────────────────────────────────────────────────── Datafabric
  {
    slug: 'datafabric',
    name: 'Bloo Datafabric',
    eyebrow: 'DATAFABRIC · THE MEMORY LAYER',
    positioning: 'The memory layer',
    hero: {
      headline: 'Telemetry is not exhaust.',
      headlineEmphasis: 'It is enterprise memory.',
      sub: 'Bloo Datafabric captures full-fidelity telemetry, structures it the moment it arrives, and retains it as long-term, machine-consumable memory  -  inside your own cloud, at predictable cost.',
    },
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: 'Most platforms treat your logs as something to throw away',
      intro:
        'Enterprises generate enormous volumes of telemetry, then pay to forget it. Cost models punish full visibility, history fragments across vendors, and the data is shaped for human queries rather than machine reasoning.',
      points: [
        { title: 'Cost penalizes visibility', description: 'Ingestion-based pricing forces teams to drop sources and shorten retention  -  engineering blind spots into the architecture.' },
        { title: 'History is fragmented', description: 'Telemetry scatters across SIEMs, lakes and archives. No single system holds the canonical record of what actually happened.' },
        { title: 'Built for humans, not machines', description: 'Data optimized for ad-hoc search cannot be reasoned over continuously by autonomous agents that need ground truth.' },
        { title: 'Control shifts to vendors', description: 'When pricing and platforms dictate what you can see, you lose authority over your own operational truth.' },
      ],
    },
    stats: {
      eyebrow: 'PROOF',
      heading: 'Full fidelity, without the full bill',
      items: [
        { value: 'Up to 98%', label: 'Compression', sub: 'Same disk footprint holds far more data' },
        { value: '1–5 yr', label: 'Hot, searchable retention', sub: 'Queryable in real time, not cold archive' },
        { value: '0', label: 'Ingestion penalties', sub: 'Economics scale with time, not volume', tone: 'accent' },
        { value: '100%', label: 'In your own cloud', sub: 'Customer-owned deployment and data' },
      ],
    },
    features: {
      eyebrow: 'WHAT IT DOES',
      heading: 'A canonical record that compounds in value',
      intro: 'Datafabric is the substrate every other Bloo product runs on  -  and the foundation autonomous agents reason against.',
      items: [
        { icon: 'database', title: 'Full-fidelity capture', description: 'Collect all logs  -  security, infrastructure, application, cloud and identity  -  without sampling, so nothing is lost before it can matter.' },
        { icon: 'layers', title: 'Metadata-first structure', description: 'Telemetry is enriched and structured at ingest, which means investigations start from understanding instead of raw text.' },
        { icon: 'history', title: 'Entity histories', description: 'Hosts, users, IPs and domains accumulate continuous histories  -  so causal chains can be reconstructed across years, not days.' },
        { icon: 'clock', title: 'Long-term hot retention', description: 'Keep 1–5 years of full-fidelity history hot and searchable, which means threat hunting and audits run against complete truth.' },
        { icon: 'scale', title: 'Predictable economics', description: 'Costs scale with time rather than ingestion volume, which means complete logging never triggers a surprise bill.' },
        { icon: 'cloud', title: 'Your cloud, your data', description: 'Runs entirely inside the customer environment, which means sovereignty and governance stay with you  -  not a vendor.' },
      ],
    },
    workflow: {
      eyebrow: 'HOW IT WORKS',
      heading: 'From telemetry to memory to reasoning',
      intro: 'Most data lakes stop at storage. Bloo keeps going  -  turning retained telemetry into understanding humans and agents can act on.',
      steps: [
        { title: 'Capture', description: 'Telemetry streams in from across the enterprise stack and is captured at full fidelity  -  no sampling, no drop.' },
        { title: 'Structure', description: 'Metadata and entities are extracted inline, so the record is machine-consumable the moment it lands.' },
        { title: 'Retain', description: 'Data is compressed and held hot for years, queryable in real time as one canonical repository.' },
        { title: 'Reason', description: 'Humans and autonomous agents reason over historical truth  -  reconstructing causal histories on demand.' },
      ],
    },
    capabilities: {
      eyebrow: 'CAPABILITY INDEX',
      heading: 'What Datafabric ships with',
      rows: [
        { capability: 'Architecture', description: 'Cloud-scale file-node datalake  -  scale capacity without database or big-data administrators.' },
        { capability: 'Compression', description: 'Stream compression - up to 98% reduction on commodity hardware.' },
        { capability: 'Retention', description: 'Long-term hot retention, Ship with 365 Day\'s of retention OOTB(Out Of The Box)' },
        { capability: 'Enrichment', description: 'Real-time inline enrichment with GeoData, threat intelligence and identity/access context.' },
        { capability: 'Query', description: 'Bloo Query Language and native SQL for high-speed search and correlation.' },
        { capability: 'Programmability', description: 'Python code blocks for ML and data manipulation; AI Blocks for no-code outlier detection.' },
        { capability: 'Deployment', description: 'Runs inside the customer cloud or bare metal  -  data is never forwarded to a vendor tenant.' },
        { capability: 'Consumers', description: 'Serves any OEM, user analytics, SynthAI and Crucible from one structured system of record.' },
      ],
    },
    faqs: [
      { q: 'Is Bloo Datafabric a data lake?', a: 'On day one it replaces your log data lake  -  centralized collection, efficient retention, and hot, searchable history. It then goes further: extracting metadata, building entity histories, and maintaining understanding that a generic lake cannot.' },
      { q: 'How is it cheaper than ingestion-priced platforms?', a: 'Pricing scales with retention time, not data volume, and stream compression reduces storage by up to 98%. You can log everything without an ingestion penalty.' },
      { q: 'Where does my data live?', a: 'Entirely inside your own cloud or bare metal. Bloo deploys into your environment, so sovereignty, governance and access control remain under your control.' },
      { q: 'How does it support AI agents?', a: 'Telemetry is structured and machine-consumable, giving autonomous agents the long-term memory and ground truth they need to reason correctly instead of guessing.' },
    ],
    related: ['bloo-vantage', 'synthai', 'crucible'],
    meta: {
      title: 'Bloo Datafabric | The Memory Layer for Telemetry',
      description: 'Bloo Datafabric captures full-fidelity telemetry and retains it as long-term, machine-consumable memory in your own cloud  -  at predictable cost.',
      keyword: 'telemetry data fabric',
    },
    pillar: 'Memory',
  },

  // ─────────────────────────────────────────────────────── Bloo Vantage (SIEM)
  {
    slug: 'bloo-vantage',
    name: 'Bloo Vantage',
    eyebrow: 'BLOO VANTAGE · UNIFIED THREAT DETECTION',
    positioning: 'Cloud (SaaS) / Self-hosted',
    hero: {
      headline: 'Unified threat detection across every layer of',
      headlineEmphasis: 'the enterprise.',
      sub: 'Four detection engines. One data fabric. No gaps. Bloo Vantage brings SIEM, UEBA, NBAD, and EPM under a single operational roof  -  so the investigation that used to require four specialists and a bridge call surfaces as a single correlated signal, already assembled.',
    },
    problem: {
      eyebrow: 'WHERE SOCS BREAK',
      heading: 'Detection gaps are structural, not accidental',
      intro:
        'Your SIEM is only as intelligent as your devices are. If the device did not recognize something, it did not emit a log. Four disconnected tools mean four blind spots. Bloo Vantage closes them all at once.',
      points: [
        { title: 'Log blind spots', description: 'Log-based detection depends on devices emitting logs. If the device did not recognize something, it did not emit a log  -  NBAD closes that gap at the packet layer, where data is unconditional.' },
        { title: 'Behavioral drift', description: 'Persistent behavioral change becomes the new normal in legacy tools. UEBA retains a rolling seven-day baseline  -  separating a user who changed work habits from one whose credentials have been stolen.' },
        { title: 'Fragmented signals', description: 'Four specialists and a bridge call to correlate a single incident. Vantage assembles the signal before it reaches the analyst queue.' },
      ],
    },
    stats: {
      eyebrow: 'THE NUMBERS',
      heading: 'Four engines, one system of record',
      items: [
        { value: '600+', label: 'Active detection workbooks', sub: 'Real-time streaming, continuously updated with the threat landscape' },
        { value: '98.4%', label: 'Data compression', sub: 'vs. 55% industry average  -  63 nodes where competitors need 530' },
        { value: '7-Day', label: 'Rolling baseline window', sub: 'UEBA & NBAD baselines retrain continuously  -  persistent drift becomes the new normal' },
        { value: '365 Days', label: 'Hot retention', sub: 'Full-fidelity, queryable in real time  -  no tiered storage gymnastics', tone: 'accent' },
      ],
    },
    features: {
      eyebrow: 'FOUR DETECTION ENGINES',
      heading: 'SIEM, UEBA, NBAD, and EPM on one data fabric',
      intro: 'All four engines draw from and write back to Bloo Datafabric  -  all logs, all flows, all endpoint telemetry, IoT events, cloud telemetry.',
      items: [
        { icon: 'shield', title: 'SIEM - Log-Based Detection at Scale', description: '600+ active detection workbooks in real-time streaming. Uncapped flat-fee licensing with a 14% year-on-year cap. Non-index-based retention in S3  -  keep a year, query a year. No index management, no tiered storage.' },
        { icon: 'brain', title: 'UEBA - Behavioral Baselines', description: 'ML anomaly detection across users, hosts, applications, IPs and every entity. Two model families: Time-Series (Prophet, hourly forecasting) and Unsupervised (Isolation Forest, per-population outlier). Rolling seven-day baseline retraining.' },
        { icon: 'network', title: 'NBAD - Network Behavior Anomaly Detection', description: 'Isolation Forest detection at the packet layer across 29 features per NetFlow record. Progressive model promotion from 10-min to 1-month horizon  -  noise floor drops with each tier, highest-confidence model is always live.' },
        { icon: 'server', title: 'EPM - Endpoint Protection Management', description: 'Lightweight osquery-based agent for Linux and Windows. Continuous interval-based collection: process events, network events, file activity, installed packages, user sessions. Live Response and YARA rule execution on demand.' },
        { icon: 'bot', title: 'B Copilot - Embedded AI Assistant', description: 'Available platform-wide as a full-page interface and as a side panel within signals, workbooks, baselines and model pages. Understands the data schema, entity model, osquery framework and Bloo documentation  -  analysts work in natural language.' },
        { icon: 'activity', title: 'Signal Management & MITRE Coverage', description: 'A single unified queue for signals from all four engines. Cross-source view with SIEM, UEBA and NBAD volumes side-by-side. Platform-computed Mean Time to Triage / Remediate. Full ATT&CK framework with workbook coverage per tactic and technique.' },
      ],
    },
    workflow: {
      eyebrow: 'ARCHITECTURE',
      heading: 'All engines draw from one data fabric',
      intro: 'Every detection engine writes back to and reads from Bloo Datafabric  -  creating a single system of record for every log, flow, endpoint event and IoT signal.',
      steps: [
        { title: 'Ingest everything', description: 'NetFlow, syslog, Zeek/Suricata, cloud audit trails, endpoint telemetry, IoT syslog  -  any timestamped log, unconditionally.' },
        { title: 'SIEM detects', description: '600+ streaming workbooks evaluate log-based signals in real time with BQL, Python blocks and AI Blocks for no-code ML.' },
        { title: 'UEBA & NBAD layer', description: 'Behavioral and network anomaly models fire continuously, enriching signals with rolling-baseline context for every entity and flow.' },
        { title: 'EPM closes the gap', description: 'Endpoint agent telemetry, live response and YARA scanning add process, connection and file-activity context on any enrolled endpoint.' },
        { title: 'Correlated signal', description: 'All four engines write to the unified signal queue. Analysts see one assembled investigation  -  not four separate alerts from four separate tools.' },
      ],
    },
    capabilities: {
      eyebrow: 'CAPABILITY INDEX',
      heading: 'What Bloo Vantage ships with',
      rows: [
        { capability: 'Detection engines', description: 'SIEM, UEBA (Beta), NBAD (Beta), EPM (Beta)  -  all drawing from and writing back to Bloo Datafabric.' },
        { capability: 'Detection content', description: '600+ active detection workbooks in real-time streaming, updated continuously with the threat landscape.' },
        { capability: 'Data compression', description: '98.4% vs. 55% industry average. A deployment that would have needed 530 nodes runs on 63.' },
        { capability: 'Retention', description: '365 days hot retention, non-index-based. Stored in S3 and queried directly  -  no index management, no tiered storage.' },
        { capability: 'Licensing', description: 'Uncapped flat-fee with a 14% year-on-year cap. Ingest 2 TB/day at year two  -  the cost does not change.' },
        { capability: 'UEBA models', description: 'Time-Series (Prophet, 1-day hourly forecasting) and Unsupervised (Isolation Forest, 1-hour per-population outlier). Baselines: normal behavior, rare behavior (DBSCAN), peer-group comparison, entity baselines.' },
        { capability: 'NBAD models', description: 'Isolation Forest across 29 NetFlow features. Progressive model promotion: Base 10 min → 30 min → 1 hr → 1 day → 15 days → 1 month.' },
        { capability: 'EPM collection', description: 'Process events, network events, file activity, installed packages, user sessions. Online/offline heartbeat every 5 seconds. Token-based fleet enrollment via Ansible.' },
        { capability: 'Analytics', description: 'Python blocks · BQL for high-speed search and correlation · AI Blocks for no-code ML and outlier detection · Visual search via UI console.' },
        { capability: 'Log & telemetry sources', description: 'NetFlow V1/V5/V10, IPFIX, sFlow, Syslog, Zeek/Suricata, AWS CloudTrail, Azure Activity, GCP Audit, Okta (roadmap), Microsoft Entra (roadmap), Linux & Windows EPM, IoT Syslog, any timestamped log.' },
        { capability: 'Deployment', description: 'Self-hosted on bare metal (core servers, not virtualized) or customer-managed cloud: AWS, Azure, GCP. SaaS available where on-premises constraints do not apply.' },
        { capability: 'MITRE ATT&CK', description: 'Full ATT&CK framework rendered with workbook coverage per tactic and technique, and last-signal timestamps  -  evidence a CISO can cite without pulling a separate report.' },
      ],
    },
    highlights: {
      eyebrow: 'KEY HIGHLIGHTS',
      heading: 'Why teams choose Bloo Vantage',
      items: [
        'Four detection engines on one data fabric  -  no gaps, no stitching',
        '98.4% data compression  -  63 nodes where competitors need 530',
        'Uncapped flat-fee licensing with a 14% year-on-year cap',
        'Seven-day rolling baseline window for UEBA and NBAD',
        'Live endpoint response and YARA scanning via EPM',
        'B Copilot embedded throughout  -  analysts work in natural language',
        'MITRE ATT&CK coverage with last-signal timestamps',
        'Pre-built dashboards and on-demand PDF reports',
      ],
    },
    faqs: [
      { q: 'What are the four detection engines in Bloo Vantage?', a: 'SIEM (log-based detection), UEBA (user and entity behavioral baselines), NBAD (network behavior anomaly detection at the packet layer), and EPM (endpoint protection management via lightweight osquery agent). All four engines draw from and write back to Bloo Datafabric.' },
      { q: 'How does UEBA differ from SIEM detection?', a: 'SIEM detects against known workbooks and rules applied to log data. UEBA applies ML to behavioral baselines for every user and entity  -  separating persistent change (new normal) from transient drift (credential theft). Baselines retrain on a rolling seven-day window.' },
      { q: 'Why does NBAD matter if we already have a SIEM?', a: 'Your SIEM is only as intelligent as your devices are. If a device did not recognize an event, it did not emit a log. NBAD monitors unconditionally at the packet layer  -  volume, flow direction, port distribution, and ASN across every hop  -  closing the gap where logs are silent.' },
      { q: 'How does the flat-fee licensing work?', a: 'Bloo uses an uncapped flat annual fee with a 14% year-on-year cap. Ingest 2 TB/day at year two and the cost does not change. Finance gets complete predictability; infrastructure has no incentive to suppress data collection.' },
      { q: 'What deployment options are available?', a: 'Self-hosted on bare metal (core servers required, not virtualized) or customer-managed cloud on AWS, Azure, or GCP. SaaS is also available for environments where on-premises constraints do not apply.' },
      { q: 'What is EPM Live Response?', a: 'Live Response sends queries directly to the osquery agent on any enrolled, online endpoint and returns results in near-real-time. B Copilot understands the osquery schema natively  -  analysts work in natural language without knowing table names or column structure.' },
    ],
    related: ['datafabric', 'synthai', 'crucible'],
    meta: {
      title: 'Bloo Vantage | Unified Threat Detection  -  SIEM, UEBA, NBAD, EPM',
      description: 'Bloo Vantage unifies four detection engines  -  SIEM, UEBA, NBAD, and EPM  -  on one data fabric. 600+ workbooks, 98.4% compression, 365-day hot retention.',
      keyword: 'unified threat detection SIEM UEBA NBAD EPM',
    },
    pillar: 'Reasoning',
  },

  // ─────────────────────────────────────────────────────── On-Prem SIEM
  {
    slug: 'bloo-onprem-siem',
    name: 'Bloo On-Prem SIEM',
    eyebrow: 'BLOO ON-PREM SIEM · SOVEREIGN',
    positioning: 'Sovereign by construction',
    hero: {
      headline: 'On-premise SIEM,',
      headlineEmphasis: 'sovereign by construction.',
      sub: 'Bloo On-Prem SIEM keeps the entire detection pipeline inside your own bare metal  -  collecting events, transforming machine data into threat indicators, and acting on them, end to end. No data forwarded.',
    },
    problem: {
      eyebrow: 'THE CASE FOR SOVEREIGNTY',
      heading: 'Some data can never leave your walls',
      intro:
        'For regulated, sovereign and air-gapped environments, the central component of the SOC must run where the data lives. Bloo On-Prem delivers a full SIEM, user analytics and automation as one integrated platform you operate yourself.',
      points: [
        { title: 'Memory before motion', description: 'Detection is only as good as the history it runs against  -  keep full-fidelity history on-site instead of discarding it to control cost.' },
        { title: 'No data forwarded', description: 'The pipeline runs entirely in your bare metal, which means no telemetry is sent to a vendor cloud or tenant.' },
        { title: 'Predictable, per-device economics', description: 'Three products at the price of one, licensed per device  -  so cost stays predictable as you grow.' },
      ],
    },
    stats: {
      eyebrow: 'TOTAL COST OF OWNERSHIP',
      heading: 'A 90% headline saving, line by line',
      items: [
        { value: '90%', label: 'Security engineering', sub: 'Detection content updates with the threat landscape, not your release cycle', tone: 'accent' },
        { value: '80%', label: 'Administration', sub: 'Internal visibility, auto-recovery and master configuration reduce ops dependency' },
        { value: '70%', label: 'Hardware', sub: 'Stream compression multiplies commodity-hardware throughput' },
        { value: '70%', label: 'Security analyst', sub: 'Connected Signals and graph analytics cut alert fatigue' },
        { value: '65%', label: 'Software', sub: 'Three products  -  SIEM, user analytics, automation  -  at the price of one' },
      ],
    },
    features: {
      eyebrow: "WHAT'S IN THE PLATFORM",
      heading: 'One datalake, three capabilities, your bare metal',
      items: [
        { icon: 'server', title: 'Integrated datalake', description: 'SIEM, user analytics and automation on one on-premise datalake, which means no stitching together separate tools.' },
        { icon: 'database', title: 'Up to 98% compression', description: 'Stream compression stores far more data on the same disk, which means longer retention without new hardware.' },
        { icon: 'activity', title: 'Real-time in-stream detection', description: 'Threats are detected on in-stream analytics as events arrive, which means faster time-to-detect on-site.' },
        { icon: 'brain', title: 'No-code ML & outlier detection', description: 'Build models and find anomalies without a data-science team, which means analytics scale with your existing staff.' },
        { icon: 'barChart', title: 'Open Analytics workbench', description: 'A high-performance workbench for search, correlation and reporting, which means deep investigation stays in-house.' },
        { icon: 'network', title: 'Automated alert syndication', description: 'Related events are syndicated across hidden campaigns, which means analysts see the whole story, not fragments.' },
      ],
    },
    capabilities: {
      eyebrow: 'CAPABILITY INDEX',
      heading: 'What Bloo On-Prem SIEM ships with',
      rows: [
        { capability: 'Product', description: 'SIEM, user analytics, automation and an on-premise datalake  -  one integrated platform.' },
        { capability: 'Compression', description: 'Up to 98% compression for dramatically reduced TCO on the same disk footprint.' },
        { capability: 'Primary use case', description: 'Basic security monitoring, advanced threat detection, cloud security and compliance.' },
        { capability: 'Detection content', description: '600+ active detection workbooks in real-time streaming, updated continuously with the threat landscape.' },
        { capability: 'Connectors', description: 'Native connectors for Azure, AWS, GCP and all major cloud-security and application providers.' },
        { capability: 'Enrichment', description: 'Real-time inline enrichment with GeoData, threat-intelligence providers and user/access information.' },
        { capability: 'Analytics', description: 'Threat models, no-code outlier detection and a pipelined workbench  -  Python blocks, Bloo Query Language, Spark SQL, AI Blocks, visual search.' },
        { capability: 'Automation playbooks', description: 'Playbooks with validation and response; integrations with major cybersecurity products.' },
        { capability: 'Triage', description: 'Connected Signals links threats with cognitive ML and builds a common view across campaigns.' },
      ],
    },
    highlights: {
      eyebrow: 'KEY HIGHLIGHTS',
      heading: 'Memory before motion. Sovereignty by construction.',
      items: [
        'Runs entirely in your own bare metal  -  no data forwarded',
        'One product, three capabilities  -  predictable per-device pricing',
        'Auto-recovery and master configuration reduce admin overhead',
        'Detection content updated with the threat landscape, not the release cycle',
        'Up to 98% compression via streams',
        'High-performance Open Analytics workbench',
      ],
    },
    faqs: [
      { q: 'Does any data leave our datacenter?', a: 'No. Bloo On-Prem SIEM runs the full collection, detection and response pipeline inside your own bare metal  -  no telemetry is forwarded to a vendor cloud.' },
      { q: 'How does it reduce total cost of ownership?', a: 'Up to 98% compression cuts hardware needs, auto-recovery and master configuration reduce administration, and three products ship at the price of one  -  for headline savings up to 90% on security engineering.' },
      { q: 'How much data can it store?', a: 'Stream compression stores significantly more data on the same disk footprint, so you can retain far longer history without expanding hardware.' },
      { q: 'How is detection content kept current?', a: 'Correlation rules, analytic models and ML models update in real time with the changing threat landscape  -  your engineering team is not rebuilding content every quarter.' },
    ],
    related: ['bloo-vantage', 'datafabric', 'synthai'],
    meta: {
      title: 'Bloo On-Prem SIEM | Sovereign On-Premise SIEM',
      description: 'Bloo On-Prem SIEM runs the full detection pipeline in your bare metal  -  up to 98% compression, 600+ workbooks, no data forwarded.',
      keyword: 'on premise SIEM',
    },
    pillar: 'Control',
  },

  // ─────────────────────────────────────────────────────── SynthAI
  {
    slug: 'synthai',
    name: 'SynthAI',
    eyebrow: 'SYNTHAI · CONVERSATIONAL ANALYTICS CO-PILOT',
    positioning: 'Conversational analytics co-pilot',
    hero: {
      headline: 'Ask a question in plain English. Get a trusted, evidence-backed answer  - ',
      headlineEmphasis: 'in seconds.',
      sub: 'SynthAI lets security and operations teams ask natural-language questions and receive structured, auditable answers from their Bloo Datafabric  -  with full visibility into how every answer was reached.',
    },
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: 'Teams are overwhelmed with data but underserved by insight',
      intro:
        'Traditional analytics tools require query expertise, produce opaque outputs, and offer no path from an answer back to a deeper investigation. The result is slow decisions, missed signals, and no audit trail.',
      points: [
        { title: 'Query expertise is a bottleneck', description: 'Analysts spend hours writing queries instead of making decisions, and backlogs grow behind the few who can.' },
        { title: 'Answers lack attribution', description: 'Opaque outputs are hard to trust and impossible to audit when the cost of a wrong answer is a breach.' },
        { title: 'One answer breeds ten questions', description: 'Every result leads to more manual follow-ups, with no system to pursue the investigation tree.' },
      ],
    },
    stats: {
      eyebrow: 'BUILT FOR HIGH STAKES',
      heading: 'Trust, transparency and depth  -  by design',
      items: [
        { value: '5-stage', label: 'Query intelligence pipeline', sub: 'Deterministic, observable in real time' },
        { value: '30–50', label: 'Tasks per deep investigation', sub: 'Auto-Follow scales breadth when needed' },
        { value: 'Up to 5', label: 'Levels of investigation depth', sub: 'Root question decomposed into a task tree' },
        { value: '100%', label: 'Reproducible answers', sub: 'Every decision logged; no black boxes', tone: 'accent' },
      ],
    },
    features: {
      eyebrow: 'PRIMARY FEATURES',
      heading: 'An investigation engine, not a chatbot',
      items: [
        { icon: 'workflow', title: '5-stage query intelligence', description: 'Decomposition, query generation, execution, analysis and synthesis  -  each stage observable via real-time streaming, which means no black boxes.' },
        { icon: 'fileCheck', title: 'Structured, auditable responses', description: 'Every answer ships with evidence cards, a confidence badge, explicit reasoning, recommendations, severity and the exact SQL  -  which means reproducibility is built in.' },
        { icon: 'gitBranch', title: 'Auto-Follow investigation', description: 'Autonomously pursues the logical next questions to a depth of five levels, which means analyst-grade depth at automation speed.' },
        { icon: 'network', title: 'Task & entity graphs', description: 'Investigations render as live graphs of every question, query and flagged entity, which means you can pivot to an entity deep-dive without losing the thread.' },
        { icon: 'lock', title: 'Tenant isolation by construction', description: 'Every lookup and model call is scoped by tenant; keys are sealed in Vault  -  which means cross-tenant access is architecturally impossible.' },
        { icon: 'gauge', title: 'LLM governance & cost ledger', description: 'Real-time token and USD cost tracking across Anthropic, OpenAI, Bedrock and Ollama, which means AI spend is visible before the bill arrives.' },
      ],
    },
    workflow: {
      eyebrow: 'THE PIPELINE',
      heading: 'Five deterministic stages, fully observable',
      intro: 'SynthAI does not pass a question to an LLM and return a guess. Every query is processed through a deterministic pipeline, streamed live so users always know what is happening.',
      steps: [
        { title: 'Decomposition', description: 'Complex questions are broken into targeted sub-questions mapped to specific data streams, optionally enriched with web search.' },
        { title: 'Query generation', description: 'Each sub-question becomes a validated SQL query with explicit field mapping and time-range guardrails that block unsafe patterns.' },
        { title: 'Execution', description: 'Queries run concurrently across streams, compressing a sequential investigation into seconds.' },
        { title: 'Analysis', description: 'Each result set is summarized independently, with key findings and per-stream severity ratings.' },
        { title: 'Synthesis', description: 'All analyses fuse into one coherent answer  -  evidence, confidence score, reasoning and prioritized recommendations.' },
      ],
    },
    highlights: {
      eyebrow: 'SECONDARY CAPABILITIES',
      heading: 'Enterprise control, end to end',
      items: [
        'Multi-provider LLM support: Anthropic, OpenAI, AWS Bedrock, Ollama',
        'Field discovery learns your schema to improve SQL accuracy over time',
        'Web-search enrichment grounds threat-intel queries in current context',
        'Query guardrails block unsafe SQL before it reaches the data layer',
        'Full execution history persisted for compliance and audit',
        'Real-time WebSocket streaming of pipeline progress and token usage',
      ],
    },
    faqs: [
      { q: 'Is SynthAI just a wrapper around an LLM?', a: 'No. It runs a deterministic 5-stage pipeline  -  decomposition, validated query generation, concurrent execution, analysis and synthesis  -  every stage observable and logged, so answers are reproducible.' },
      { q: 'How do we trust the answers?', a: 'Every response is a structured object with source-attributed evidence, a confidence badge, explicit chain-of-thought reasoning, severity ratings and the exact SQL executed  -  purpose-built for auditability.' },
      { q: 'Which LLM providers are supported?', a: 'Anthropic (Claude), OpenAI (GPT), AWS Bedrock and self-hosted Ollama. Teams manage their own credentials, and every call is metered in a real-time cost ledger.' },
      { q: 'Is it safe for multi-tenant environments?', a: 'Yes. Every database lookup and model call is scoped by tenant and scope ID, and API keys are sealed in unique HashiCorp Vault paths  -  cross-tenant access is architecturally impossible.' },
    ],
    related: ['datafabric', 'bloo-vantage', 'crucible'],
    meta: {
      title: 'SynthAI | Conversational Security Analytics Co-Pilot',
      description: 'SynthAI turns plain-English questions into validated, evidence-backed investigations  -  a deterministic 5-stage pipeline with full auditability.',
      keyword: 'AI security analytics copilot',
    },
    pillar: 'Reasoning',
  },

  // ─────────────────────────────────────────────────────── Crucible
  {
    slug: 'crucible',
    name: 'Crucible',
    eyebrow: 'CRUCIBLE · AUTONOMOUS AI SOC',
    positioning: 'Autonomous AI SOC',
    hero: {
      headline: 'An autonomous SOC that works the queue at machine speed  - ',
      headlineEmphasis: 'and asks before it acts.',
      sub: 'Crucible triages every signal, investigates with a fleet of specialist AI agents, groups related alerts into real incidents, and proposes response  -  with a human in control of every consequential action.',
    },
    problem: {
      eyebrow: 'THE PROBLEM',
      heading: 'Modern SOC teams face three structural problems',
      intro:
        'Detection tools generate far more alerts than analysts can investigate. Crucible attacks all three problems at once  -  triaging every signal, investigating at machine speed, and applying the same rigorous process to each one.',
      points: [
        { title: 'Alert overload', description: 'Detection tools generate more alerts than any team can investigate. Most go untouched and real threats hide in the noise.' },
        { title: 'Slow, manual triage', description: 'Each alert needs a human to pull logs, check reputation and build a timeline  -  minutes to hours, per alert, around the clock.' },
        { title: 'Inconsistent response', description: 'Outcomes depend on which analyst caught the alert and how tired they were, instead of a repeatable process.' },
      ],
    },
    stats: {
      eyebrow: 'VALUE AT A GLANCE',
      heading: 'Every signal investigated, every action accountable',
      items: [
        { value: 'Every', label: 'Signal investigated automatically', sub: 'No alert goes untouched; threats stop hiding in the noise' },
        { value: '1,200+', label: 'Pre-built integrations', sub: 'Across 15+ categories of the security stack' },
        { value: '5', label: 'AI providers supported', sub: 'Bring your own model  -  including local Ollama' },
        { value: 'Human', label: 'In command of consequential actions', sub: 'Speed on safe actions, judgment on the rest', tone: 'accent' },
      ],
    },
    features: {
      eyebrow: 'THE AI AGENT FLEET',
      heading: 'A virtual SOC team that never sleeps',
      intro: 'Crucible’s intelligence comes from a roster of specialized agents  -  each an expert in one slice of security operations.',
      items: [
        { icon: 'bot', title: 'Triage & orchestration', description: 'A master orchestrator runs the pipeline while the triage agent scores severity, filters false positives and routes each signal, re-evaluating as evidence arrives.' },
        { icon: 'telescope', title: 'Eight domain specialists', description: 'Investigators tuned to email threats, insider threat, lateral movement, malware, exfiltration, identity abuse, network anomalies and cloud security.' },
        { icon: 'network', title: 'Correlation & coagulation', description: 'Related signals are linked by shared indicators and timing, then clustered into one unified incident instead of fifty scattered alerts.' },
        { icon: 'fingerprint', title: 'Attribution to MITRE ATT&CK', description: 'Activity is mapped to tactics, techniques, threat actors and campaigns  -  driving both attribution and which specialist investigates.' },
        { icon: 'shield', title: 'Response & remediation', description: 'The response agent recommends actions scaled to confidence and policy; the remediation agent tracks tasks through to verified completion.' },
        { icon: 'fileCheck', title: 'Audit, learn & threat-hunt', description: 'A compliance-ready evidence trail is collected automatically, false-positive rates inform playbook improvements, and proactive hunts find threats that never alerted.' },
      ],
    },
    workflow: {
      eyebrow: 'THE INVESTIGATION PIPELINE',
      heading: 'From signal to resolved incident  -  humans where it matters',
      steps: [
        { title: 'Ingest', description: 'Signals stream in from the security stack and are captured and de-duplicated.' },
        { title: 'Playbook match', description: 'The right investigation playbook is auto-selected for the signal type for consistent handling.' },
        { title: 'Triage', description: 'AI classifies severity, category and false-positive likelihood, then routes: dismiss, investigate or escalate.' },
        { title: 'Investigate', description: 'Specialist agents query historical data, build timelines and gather evidence for a reasoned verdict.' },
        { title: 'Coagulate', description: 'Related signals are clustered into a single unified incident  -  one incident, not fifty alerts.' },
        { title: 'Respond', description: 'A concrete response is proposed, scaled to confidence and risk; production-impacting actions wait for human approval.' },
      ],
    },
    highlights: {
      eyebrow: 'HUMAN-IN-THE-LOOP CONTROL',
      heading: 'Autonomous, not unsupervised',
      items: [
        'Auto-execute safe steps: enrich an indicator, notify, open a ticket, write audit entries',
        'Approval by default: block a known-bad IP, quarantine an email, reset an MFA token',
        'Always require approval: isolate a host, disable an account, change firewall rules',
        'Approvals queue with one-line summaries and full expandable evidence chains',
        'Escalation queue with SLA tracking, assignment and decision capture',
        'Reopen or re-investigate with human guidance fed straight back to the agents',
      ],
    },
    capabilities: {
      eyebrow: 'PLATFORM',
      heading: 'Connects to the stack you already run',
      rows: [
        { capability: 'Integrations', description: '1,200+ pre-built adapters across 15+ categories  -  SIEM, EDR, cloud, identity, email, threat intel, ITSM and more.' },
        { capability: 'Threat intelligence', description: 'Indicators enriched against multiple reputation sources; activity mapped to MITRE ATT&CK.' },
        { capability: 'Bring-your-own AI', description: 'Anthropic Claude, AWS Bedrock, Azure AI, OpenAI and local Ollama  -  selectable per deployment and per pipeline step.' },
        { capability: 'Access & compliance', description: 'SSO, SOC-aligned RBAC, secrets in your choice of four enterprise vaults, and a complete audit trail with reporting.' },
        { capability: 'Deployment', description: 'Self-hosted per customer on Kubernetes (AWS and Azure); customer data stays in the customer environment.' },
        { capability: 'Workbench', description: 'A real-time War Room streams every signal, incident, approval and agent decision as it happens.' },
      ],
    },
    faqs: [
      { q: 'Does Crucible take action without a human?', a: 'Only for safe, reversible steps like enriching an indicator or opening a ticket. Production-impacting actions  -  isolating a host, disabling an account, changing firewall rules  -  always require human approval.' },
      { q: 'How does it reduce alert overload?', a: 'It investigates every signal automatically with specialist agents and clusters related signals into unified incidents, so analysts work a handful of real incidents instead of thousands of raw alerts.' },
      { q: 'Can we use our own AI models?', a: 'Yes. Crucible supports five providers  -  Anthropic, AWS Bedrock, Azure AI, OpenAI and local Ollama  -  selectable per deployment and even per pipeline step to balance cost, speed and privacy.' },
      { q: 'How is it deployed?', a: 'Self-hosted per customer on Kubernetes (AWS and Azure). Customer data never leaves the customer environment, with the option to run AI entirely locally for air-gapped deployments.' },
    ],
    related: ['bloo-vantage', 'synthai', 'datafabric'],
    meta: {
      title: 'Crucible | Autonomous AI SOC by Bloo',
      description: 'Crucible investigates every signal with specialist AI agents, groups alerts into incidents, and proposes response  -  humans approve consequential actions.',
      keyword: 'autonomous AI SOC platform',
    },
    pillar: 'Agents',
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const productSummaries = products.map((p) => ({
  slug: p.slug,
  name: p.name,
  positioning: p.positioning,
  meta: p.meta,
}));
