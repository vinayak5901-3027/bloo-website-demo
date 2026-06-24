import Link from 'next/link';
import { ArrowRight, Play, CheckCircle, AlertCircle } from 'lucide-react';
import { buildMetadata } from '@/lib/seo';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { CtaBand } from '@/components/sections/CtaBand';

export const metadata = buildMetadata({
  title: 'Bloo Platform Release Notes v1.0 | General Availability',
  description: 'Bloo 1.0 GA release notes - Crucible autonomous AI SOC and SynthAI conversational analytics co-pilot.',
  path: '/release-notes',
});

const crucibleFeatures = [
  {
    category: 'Authentication & Session Management',
    items: ['OAuth 2.0 with PKCE (Google)', 'Email & Password via Bloo Vantage identity layer', 'Short-lived sessions with silent refresh', 'Every action attributed to authenticated identity'],
  },
  {
    category: 'Signal Source & Integrations',
    items: ['Dedicated Bloo Vantage connection with field mapping UI', '1,200+ pre-built adapters across 15+ categories', 'Credentials sealed in enterprise vault (AWS, Azure, GCP, HashiCorp)', 'Automated adapter routing - no manual configuration required'],
  },
  {
    category: 'Playbooks & Detection',
    items: ['Pre-built detection content covering full MITRE ATT&CK landscape', 'Automated playbook selection (cache, AI, scoring fallback)', 'Unpublished - Published - Draft - Retired lifecycle with version history', 'Five step types: query, enrich, triage, escalate, respond'],
  },
  {
    category: 'Multi-LLM Provider Support',
    items: ['Anthropic Claude - complex multi-step reasoning', 'AWS Bedrock - AWS-resident deployments', 'Google Gemini - Google Cloud-aligned enterprises', 'OpenAI - broad enterprise familiarity', 'Ollama - self-hosted, air-gapped environments'],
  },
  {
    category: 'Triage Verdict Engine',
    items: ['Three-value verdict: Active, Benign, False', 'Confidence score 0-100% with continuous re-assessment', 'FP scoring across 12 IOC fields', 'Configurable confidence threshold (default 80%)', 'Fast-path priority routing for deterministic conditions'],
  },
  {
    category: 'Tickets & Human Escalation',
    items: ['Ticket creation from UI with pre-populated triage verdict', 'Email notification to analyst distribution list', 'One-click deep link to full investigation', 'Escalation decisions captured in audit trail'],
  },
];

const synthaiFeatures = [
  {
    category: 'Authentication & LLM Management',
    items: ['Tenant-scoped sessions with short-lived tokens', 'API keys sealed in HashiCorp Vault - never stored in application DB', 'Org-level isolation by (tenant_id, scope_id) pair', 'Every LLM connection verified with live test on save'],
  },
  {
    category: '5-Stage Query Intelligence Pipeline',
    items: ['Stage 1: Decomposer - breaks questions into targeted sub-questions', 'Stage 2: Query Generator - validated SQL with guardrails (no DDL, no unbounded scans)', 'Stage 3: Executor - parallel asyncio execution, partial results forwarded on timeout', 'Stage 4: Analyser - per-stream summaries with severity ratings', 'Stage 5: Synthesizer - fused structured response streamed token-by-token'],
  },
  {
    category: 'Structured Auditable Responses',
    items: ['Direct answer with source-attributed evidence cards', 'Confidence rating and chain-of-thought reasoning', 'Severity assessment and prioritized recommendations', 'Exact SQL executed - fully reproducible'],
  },
  {
    category: 'Token & Usage Transparency',
    items: ['Real-time token and USD cost update while pipeline is running', 'Append-only usage ledger per user, scope and connection', 'Full ledger persisted in PostgreSQL for compliance audit', 'Recommendations toggle per session'],
  },
  {
    category: 'Schema Learning',
    items: ['Auto-generated extractor embeddings per customer Datafabric environment', 'Embeddings refined from real query execution results', 'Cumulative improvement - more queries = more precise field mapping', 'Strictly scoped per (tenant_id, scope_id) - never shared across tenants'],
  },
  {
    category: 'Multi-LLM Provider Support',
    items: ['Anthropic - long-context reasoning, complex multi-stream investigations', 'OpenAI - broad enterprise familiarity, wide model choice', 'AWS Bedrock - AWS-resident deployments', 'Ollama - self-hosted, air-gapped environments'],
  },
];

const crucibleLimitations = [
  { area: 'Incident Grouping', detail: 'Automatic clustering (Coagulation) targeted for a subsequent release.' },
  { area: 'MITRE Attribution', detail: 'Automated ATT&CK tactic/technique mapping targeted for next release.' },
  { area: 'Automated Response', detail: 'Escalation via ticket and email is the supported response path in v1.0.' },
  { area: 'Playbook Editor', detail: 'Full visual editing targeted for next release. Browse and clone supported.' },
  { area: 'Ollama - Triage Stage', detail: 'Ollama supported for investigation stages; triage stage in next release.' },
  { area: 'Multi-Source Ingestion', detail: 'Single source, single tenant in this release. Multi-source in next release.' },
];

const synthaiLimitations = [
  { area: 'Auto-Follow Investigation', detail: 'Cycle-graph auto-follow chaining targeted for a subsequent release.' },
  { area: 'Response Caching', detail: 'Query result caching not enabled in this release.' },
  { area: 'Embedding Backfill', detail: 'Embeddings generated from new executions only. No historical backfill on upgrade.' },
];

export default function ReleaseNotesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Release Notes', path: '/release-notes' }]} />

      {/* Hero */}
      <div className="border-b border-border bg-gradient-brand-soft">
        <Container className="py-16 lg:py-24">
          <Reveal>
            <Badge tone="secondary" className="mb-4">RELEASE NOTES</Badge>
            <h1 className="font-black tracking-tightish text-bright" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
              Bloo Platform{' '}
              <span className="text-emphasis">Release 1.0</span>
            </h1>
            <p className="mt-4 text-xl font-bold text-body">General Availability - 22 June 2026</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              The inaugural release of the Bloo Platform - a purpose-built enterprise security and analytics suite
              designed for organisations that demand transparency, control, and precision from their AI-powered operations.
            </p>

            {/* Video CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@bloo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-secondary/40 bg-secondary/10 px-5 py-3 text-sm font-bold text-secondary transition-all hover:bg-secondary/20 hover:border-secondary/60"
              >
                <Play size={16} fill="currentColor" aria-hidden="true" />
                Watch the platform walkthrough
              </a>
              <Link
                href="/request-demo"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-bold text-body transition-all hover:border-secondary/60 hover:text-bright"
              >
                Request a live demo <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* What ships in 1.0 */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="BLOO 1.0 SHIPS"
            title="Two products. Shared principles."
            intro="Multi-tenant isolation by design, bring-your-own LLM flexibility, and full auditability from first input to final output."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <Card className="flex h-full flex-col">
                <Badge tone="secondary" className="mb-4 self-start">BLOO CRUCIBLE</Badge>
                <h2 className="text-2xl font-black text-bright">Autonomous AI SOC</h2>
                <p className="mt-3 text-base italic text-secondary">Investigate every alert. Respond faster. Keep humans in command.</p>
                <p className="mt-4 flex-1 leading-relaxed text-muted">
                  Crucible automates the complete security signal investigation lifecycle - from ingestion through
                  triage to analyst handoff - without sacrificing human oversight on decisions that matter.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['1,200+ integrations', '5 AI providers', 'MITRE ATT&CK aligned', 'Human-in-the-loop'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-body">
                      <CheckCircle size={14} className="shrink-0 text-secondary" aria-hidden="true" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/platform/crucible" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-bright">
                  Explore Crucible <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </Card>
            </Reveal>
            <Reveal delay={80}>
              <Card className="flex h-full flex-col">
                <Badge tone="secondary" className="mb-4 self-start">BLOO SYNTHAI</Badge>
                <h2 className="text-2xl font-black text-bright">Conversational Analytics Co-Pilot</h2>
                <p className="mt-3 text-base italic text-secondary">Ask a question. Get a trusted, evidence-attributed answer. See exactly what it cost.</p>
                <p className="mt-4 flex-1 leading-relaxed text-muted">
                  SynthAI translates natural-language questions into validated SQL, executes them in parallel
                  against Bloo Datafabric, and returns structured, auditable answers - streamed in real time
                  with full cost transparency.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {['5-stage pipeline', '100% reproducible', 'Real-time cost ledger', 'Schema self-learning'].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-body">
                      <CheckCircle size={14} className="shrink-0 text-secondary" aria-hidden="true" />
                      {f}
                    </div>
                  ))}
                </div>
                <Link href="/platform/synthai" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-bright">
                  Explore SynthAI <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Crucible detailed features */}
      <Section alt>
        <Container>
          <SectionHeading
            eyebrow="BLOO CRUCIBLE - RELEASE DETAIL"
            title="What ships in Crucible 1.0"
            intro="Complete feature coverage across authentication, integrations, playbooks, AI providers, triage and escalation."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {crucibleFeatures.map((section, i) => (
              <Reveal key={section.category} delay={(i % 3) * 60}>
                <Card className="h-full">
                  <h3 className="text-sm font-bold uppercase tracking-widecaps text-secondary">{section.category}</h3>
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* SynthAI detailed features */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="BLOO SYNTHAI - RELEASE DETAIL"
            title="What ships in SynthAI 1.0"
            intro="Complete feature coverage across authentication, the 5-stage pipeline, structured outputs, cost transparency and schema learning."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {synthaiFeatures.map((section, i) => (
              <Reveal key={section.category} delay={(i % 3) * 60}>
                <Card className="h-full">
                  <h3 className="text-sm font-bold uppercase tracking-widecaps text-secondary">{section.category}</h3>
                  <ul className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted">
                        <CheckCircle size={14} className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Platform-wide notes */}
      <Section alt>
        <Container>
          <SectionHeading
            eyebrow="PLATFORM-WIDE"
            title="Deployment & Security"
            intro="Both products are self-hosted on Kubernetes on AWS or Azure. Customer data never leaves the customer environment."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { title: 'Deployment', detail: 'Self-hosted Kubernetes on AWS or Azure. Air-gapped deployments supported via Ollama.' },
              { title: 'Data Sovereignty', detail: 'Investigation records, query payloads and AI call content stay in the customer environment.' },
              { title: 'Secrets Management', detail: 'All credentials sealed in enterprise vaults before any connection. Never stored in application config.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <Card>
                  <h3 className="font-bold text-bright">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Known limitations */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="KNOWN LIMITATIONS"
            title="Targeted for subsequent releases"
            intro="The following capabilities are planned for upcoming releases. All other features ship fully in v1.0."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <Reveal>
              <h3 className="mb-4 text-base font-bold text-secondary uppercase tracking-widecaps">Bloo Crucible</h3>
              <div className="space-y-3">
                {crucibleLimitations.map((lim) => (
                  <div key={lim.area} className="flex items-start gap-3 rounded-lg border border-border bg-surface/50 p-4">
                    <AlertCircle size={16} className="mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
                    <div>
                      <span className="text-sm font-bold text-bright">{lim.area}: </span>
                      <span className="text-sm text-muted">{lim.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h3 className="mb-4 text-base font-bold text-secondary uppercase tracking-widecaps">Bloo SynthAI</h3>
              <div className="space-y-3">
                {synthaiLimitations.map((lim) => (
                  <div key={lim.area} className="flex items-start gap-3 rounded-lg border border-border bg-surface/50 p-4">
                    <AlertCircle size={16} className="mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
                    <div>
                      <span className="text-sm font-bold text-bright">{lim.area}: </span>
                      <span className="text-sm text-muted">{lim.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand
        headline="Ready to see Bloo"
        emphasis="in action?"
        sub="Book a 30-minute walkthrough tailored to your stack. We will map your use cases and walk through how Crucible and SynthAI fit your security operations."
      />
    </>
  );
}
