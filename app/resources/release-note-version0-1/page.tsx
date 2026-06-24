'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

// ── Data ─────────────────────────────────────────────────────────────────────

const crucibleSections = [
  {
    heading: 'Authentication & Session Management',
    description:
      "Crucible's authentication layer ensures every platform interaction is identity-bound, tenant-scoped, and fully attributable. All pipeline operations require an authenticated session; unauthenticated requests are rejected before any investigation or LLM call is initiated.",
    items: [
      {
        title: 'OAuth 2.0 with PKCE — Google',
        description:
          'Users sign in through their existing Google account via federated OAuth 2.0. Crucible receives a verified identity claim; no passwords are stored on the platform. PKCE is enforced throughout to protect the authorisation flow.',
      },
      {
        title: 'Email & Password',
        description:
          'Available to users provisioned through Bloo Vantage tenant onboarding. Credentials are managed within the Bloo Vantage identity layer; Crucible inherits the authenticated session on successful sign-in.',
      },
    ],
  },
  {
    heading: 'Signal Source',
    description:
      'Crucible ingests security signals through a dedicated Bloo Vantage connection — single source, single tenant per deployment. Every source is configured in two steps from the Crucible UI.',
    items: [
      {
        title: 'Connection Configuration',
        description:
          'Each source connection defines how Crucible reaches a Bloo Vantage instance: the base URL, tenant cluster, scope, data stream, poll interval, and timezone. Credentials are stored as a Bearer Token sealed in Vault — never exposed after initial save.',
      },
      {
        title: 'Field Mapping',
        description:
          "Raw source fields from Bloo Vantage are mapped to Crucible's 10 canonical signal fields through a point-and-click UI with live sample values. Canonical fields include detection_name, detection_tactic, detection_confidence, suspect_host, suspect_user, and target_host.",
      },
    ],
  },
  {
    heading: 'Integrations',
    description:
      "Crucible ships with a catalog of 1,200+ pre-built adapters across 15+ categories, connecting to virtually every tool in the modern enterprise security stack. All credentials are sealed in the customer's chosen enterprise vault.",
    items: [
      {
        title: 'Threat Intelligence & Enrichment (400+)',
        description:
          'VirusTotal, Recorded Future, AbuseIPDB, GreyNoise, MITRE ATT&CK and 395+ more enrichment and reputation sources.',
      },
      {
        title: 'Analytics, Network, Cloud & Endpoint (450+)',
        description:
          'Splunk, Sentinel, Elastic, Palo Alto, Fortinet, CrowdStrike, SentinelOne, Defender, CloudTrail, Azure Activity Logs, GCP Audit and more.',
      },
      {
        title: 'Identity, ITSM, Email & Collaboration (215+)',
        description:
          'Okta, Azure Entra ID, Active Directory, ServiceNow, Jira, Proofpoint, Slack, Teams, PagerDuty and more.',
      },
    ],
  },
  {
    heading: 'Playbooks',
    description:
      'The Playbook Engine automatically matches every incoming signal to an investigation procedure. The platform ships with pre-built detection content covering the full MITRE ATT&CK threat landscape.',
    items: [
      {
        title: 'Playbook Step Types',
        description:
          'Five step types define the pipeline: query (fetch data), enrich (augment IOCs), triage (run specialist agents), escalate (route to human), respond (execute action against external system).',
      },
      {
        title: 'Automated Playbook Selection',
        description:
          'Three-step resolution: mapping cache reuses the previously chosen playbook instantly; AI selection picks the best fit if no cached mapping exists; scoring fallback evaluates all playbooks as a last resort.',
      },
      {
        title: 'Playbook Lifecycle',
        description:
          'Controlled Unpublished → Published → Draft → Retired lifecycle. Edits to a live playbook create a draft automatically — the active version is never modified until the draft is explicitly published.',
      },
    ],
  },
  {
    heading: 'Multi-LLM Provider Support',
    description:
      'Crucible is not locked to any single AI provider. Organisations choose the LLM that fits their cost, performance, and data-sovereignty requirements — different pipeline stages can use different models independently.',
    items: [
      {
        title: 'Anthropic Claude',
        description:
          'Optimised for complex multi-step investigation reasoning. Recommended for the triage and investigation stages where long-context understanding matters most.',
      },
      {
        title: 'AWS Bedrock, Google Gemini & OpenAI',
        description:
          'AWS Bedrock for AWS-resident deployments and data residency commitments; Google Gemini for GCP-aligned enterprises; OpenAI for broad enterprise familiarity and wide model selection.',
      },
      {
        title: 'Ollama (Self-Hosted)',
        description:
          'Fully self-hosted, air-gapped and data-sovereignty-constrained environments. Supported for investigation stages in v1.0; triage stage support targeted for a subsequent release.',
      },
    ],
  },
  {
    heading: 'Triage Verdict & Triage Agent',
    description:
      'The Triage Agent produces a structured, three-value verdict (Active, Benign, False) paired with a confidence score (0–100%). Triage runs as a continuous re-assessment loop, revised each time a specialist agent returns new findings.',
    items: [
      {
        title: 'Structured Output & FP Scoring',
        description:
          'Every Triage Agent run produces four fields: verdict, confidence score, action (respond / dismiss / escalate), and human-readable reasoning. FP rates are evaluated in parallel across all 12 signal IOC fields.',
      },
      {
        title: 'Confidence-Threshold Investigation Loop',
        description:
          'The investigation loop terminates as soon as the aggregate threat score crosses a configurable confidence threshold (default: 80%). Low-ambiguity signals resolve faster — agent calls are not made once sufficient evidence exists.',
      },
      {
        title: 'Fast-Path Priority Order',
        description:
          'Before the full loop runs, deterministic conditions are evaluated: playbook critical finding → escalate; FP rate exceeds dismiss threshold → dismiss; detection score at escalation threshold → escalate. All thresholds are configurable without a code change.',
      },
    ],
  },
  {
    heading: 'Tickets & Human Escalation',
    description:
      'Crucible is autonomous, not unsupervised. When a signal requires human judgment, the escalation system routes it to the right analyst through two channels.',
    items: [
      {
        title: 'Ticket Creation (UI)',
        description:
          'Escalated signals can be raised as tickets directly from the Crucible UI, pre-populated with the triage verdict, confidence score, key evidence findings, and recommended actions.',
      },
      {
        title: 'Email Notification',
        description:
          'A structured escalation email is sent to a configured analyst distribution list, containing the signal summary, verdict, confidence, evidence highlights, and a one-click deep link to the full investigation in Crucible.',
      },
    ],
  },
];

const synthaiSections = [
  {
    heading: 'Authentication & Session Management',
    description:
      "SynthAI's authentication layer ensures every query is identity-bound and tenant-scoped. All pipeline operations require an authenticated session; unauthenticated requests are rejected at the gateway before any data or LLM call is made.",
    items: [
      {
        title: 'Tenant-Scoped Sessions',
        description:
          'Sessions are scoped per tenant and user, with short-lived tokens refreshed transparently. Every pipeline execution is attributed to a specific authenticated identity in the audit record.',
      },
      {
        title: 'LLM Credential Storage',
        description:
          'API keys are sealed in HashiCorp Vault at {tenant_id}/{scope_id}/llm_connections/{name} the moment they are entered. They are never stored in the application database and never returned by any read API after initial save.',
      },
    ],
  },
  {
    heading: 'Pipeline Factory — 5-Stage Query Intelligence Pipeline',
    description:
      'Every question flows through a five-stage deterministic pipeline. Each stage emits live progress over WebSocket so analysts watch the system working — not a loading spinner.',
    items: [
      {
        title: 'Stage 1 — Decomposer',
        description:
          'A QuestionDecomposer breaks the natural-language question into independent sub-questions, each mapped to a specific Datafabric stream or log source with a defined time range and candidate fields.',
      },
      {
        title: 'Stage 2 — Query Generator',
        description:
          "A QueryGenerator converts each sub-question into validated SQL with explicit field mappings and time-range constraints. A guardrails layer blocks unsafe patterns — no DDL statements, no unbounded time scans, no cross-scope joins.",
      },
      {
        title: 'Stage 3 — Executor',
        description:
          "A DatafabricExecutor runs all sub-queries in parallel using asyncio.gather(), each scoped to the tenant's scope_id. The Datafabric platform enforces data isolation independently as a second layer.",
      },
      {
        title: 'Stage 4 — Analyser',
        description:
          'A ResultAnalyzer summarises each result set independently — extracting key findings, flagging notable values, and assigning a per-stream severity rating (critical / high / medium / low / info / none).',
      },
      {
        title: 'Stage 5 — Synthesizer',
        description:
          'A Synthesizer fuses all analyses into a single structured response, streamed token-by-token. Every response includes: direct answer, source-attributed evidence cards, confidence rating, chain-of-thought reasoning, severity assessment, and the exact SQL executed.',
      },
    ],
  },
  {
    heading: 'Multi-LLM Provider Support',
    description:
      'SynthAI supports four LLM provider families out of the box. Different scopes within the same organisation can use different providers simultaneously, and switching providers requires no pipeline code changes.',
    items: [
      {
        title: 'Anthropic',
        description:
          'Long-context reasoning and complex multi-stream investigations. Recommended for deep investigative queries across large Datafabric datasets.',
      },
      {
        title: 'OpenAI & AWS Bedrock',
        description:
          'OpenAI for broad enterprise familiarity and wide model choice; AWS Bedrock for AWS-resident deployments and data residency commitments.',
      },
      {
        title: 'Ollama (Self-Hosted)',
        description:
          'Fully self-hosted, air-gapped or data-sovereignty-constrained environments. No external API calls — LLM execution stays entirely within the customer environment.',
      },
    ],
  },
  {
    heading: 'Token & Usage Transparency',
    description:
      'Every LLM call across all five pipeline stages is logged to an append-only usage ledger. Users watch tokens consumed and estimated cost update in real time while the pipeline is still running.',
    items: [
      {
        title: 'Real-Time Cost Ledger',
        description:
          'A RequestUsage accumulator aggregates all calls for the current question and pushes a live usage_update event to the browser after each LLM call completes — provider, model, input tokens, output tokens, cache usage, estimated USD cost, latency, and success state.',
      },
      {
        title: 'Compliance Audit Trail',
        description:
          'Every usage record is attributed to a specific user, scope, and connection, and the full ledger is persisted in PostgreSQL for cost reporting and compliance audit. Records cannot be modified or deleted through the application layer.',
      },
    ],
  },
  {
    heading: 'Scope-Specific Extractor Embeddings',
    description:
      "SynthAI automatically generates and continuously refines extractor embeddings scoped to each customer's Datafabric environment, derived from real query execution results.",
    items: [
      {
        title: 'Cumulative Schema Learning',
        description:
          "Embeddings capture actual field names, value distributions, confirmed stream identifiers, and field co-occurrence patterns as they exist in the customer's production data. The more queries a scope executes, the more precisely SynthAI maps sub-questions to the right streams.",
      },
      {
        title: 'Strict Tenant Isolation',
        description:
          "Embeddings are stored per (tenant_id, scope_id) and are never shared across tenants — one customer's schema vocabulary cannot influence another's pipeline.",
      },
    ],
  },
  {
    heading: 'Recommendation Control',
    description:
      'Users can toggle the Recommendations section of any response on or off per session. When disabled, the synthesizer omits the recommendations block entirely and no follow-up investigation tasks are spawned.',
    items: [
      {
        title: 'Per-Session Toggle',
        description:
          'The toggle persists for the session and is respected by the streaming protocol, giving teams the flexibility to run in deep exploratory mode or lean query mode depending on the task at hand.',
      },
    ],
  },
];

// ── Sub-components ────────────────────────────────────────────────────────────

function VersionBadge() {
  return (
    <span
      className="inline-flex items-center rounded bg-[#1a1a1a] px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-white"
    >
      V1.0
    </span>
  );
}

function ReleaseItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="border-b border-border/40 py-5 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-base font-bold text-bright">{title}</h4>
            <VersionBadge />
          </div>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{description}</p>
        </div>
        <a
          href="https://www.youtube.com/@bloo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch video"
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-surface/80 text-muted transition-all hover:border-secondary hover:bg-secondary hover:text-bg"
        >
          <Play size={13} fill="currentColor" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

function ProductSection({
  logo,
  productName,
  sections,
}: {
  logo: { dark: string; light: string };
  productName: string;
  sections: typeof crucibleSections;
}) {
  return (
    <section className="border-b border-border py-14">
      {/* Product logo header */}
      <div className="mb-10 flex items-center justify-between border-b border-border pb-8">
        <span className="inline-flex items-center gap-3">
          <Image
            src={logo.dark}
            alt={productName}
            width={180}
            height={48}
            className="product-logo-dark h-12 w-auto object-contain"
            unoptimized
          />
          <Image
            src={logo.light}
            alt={productName}
            width={180}
            height={48}
            className="product-logo-light h-12 w-auto object-contain"
            unoptimized
          />
        </span>
      </div>

      {/* Feature groups */}
      <div className="space-y-12">
        {sections.map((sec) => (
          <div key={sec.heading}>
            {/* Group heading + description — full width */}
            <h3 className="text-xl font-bold text-bright">{sec.heading}</h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">{sec.description}</p>

            {/* Items — indented with left accent border */}
            <div className="mt-6 ml-4 border-l-2 border-secondary/40 pl-6">
              {sec.items.map((item) => (
                <ReleaseItem key={item.title} title={item.title} description={item.description} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ReleaseNoteVersionPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Page header bar */}
      <div className="border-b border-border bg-surface/40">
        <div className="container-bloo flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/assets/bloo-white-logo.png"
                alt="Bloo"
                width={72}
                height={26}
                className="product-logo-dark"
                style={{ height: 26, width: 'auto' }}
                unoptimized
              />
              <Image
                src="/assets/bloo-logo-1.png"
                alt="Bloo"
                width={72}
                height={26}
                className="product-logo-light"
                style={{ height: 26, width: 'auto' }}
                unoptimized
              />
            </Link>
            <span className="h-6 w-px bg-border" />
            <span className="font-mono text-xs font-bold uppercase tracking-widecaps text-muted">
              Release Notes
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 font-mono text-xs font-bold text-secondary">
              Version 0.1 — GA
            </span>
            <span className="hidden text-xs text-muted sm:block">22 June 2026</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="container-bloo py-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widecaps text-secondary">
            Bloo — General Availability
          </p>
          <h1 className="mt-3 text-3xl font-black text-bright lg:text-4xl">Platform Release Notes</h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            This is the inaugural release of the Bloo Platform — a purpose-built enterprise security and
            analytics suite designed for organisations that demand transparency, control, and precision
            from their AI-powered operations. Bloo ships two products built on shared principles:
            multi-tenant isolation by design, bring-your-own LLM flexibility, and full auditability from
            first input to final output.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.youtube.com/@bloo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-secondary/40 bg-secondary/10 px-4 py-2.5 text-sm font-bold text-secondary transition-all hover:bg-secondary/20"
            >
              <Play size={14} fill="currentColor" aria-hidden="true" />
              Watch platform walkthrough
            </a>
            <Link
              href="/request-demo"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-bold text-body transition-all hover:border-secondary/40 hover:text-bright"
            >
              Request a live demo
            </Link>
          </div>
        </div>
      </div>

      {/* Jump-to nav */}
      <div className="sticky top-[var(--header-height)] z-30 border-y border-border bg-bg/95 backdrop-blur-sm">
        <div className="container-bloo py-4">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <span className="font-mono text-xs uppercase tracking-widecaps text-muted">Jump to:</span>
            <a href="#crucible" className="font-bold text-secondary hover:text-bright">
              Bloo Crucible
            </a>
            <a href="#synthai" className="font-bold text-secondary hover:text-bright">
              Bloo SynthAI
            </a>
            <a href="#platform-notes" className="text-body hover:text-bright">
              Platform Notes
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-bloo">

        {/* Crucible */}
        <div id="crucible" className="scroll-mt-32">
          <ProductSection
            logo={{
              dark: '/assets/crucible-logo-transparent.png',
              light: '/assets/crucible-logo-black-transparent.png',
            }}
            productName="Bloo Crucible"
            sections={crucibleSections}
          />
        </div>

        {/* SynthAI */}
        <div id="synthai" className="scroll-mt-32">
          <ProductSection
            logo={{
              dark: '/assets/synthai-logo-transparent.png',
              light: '/assets/synthai-logo-black-transparent.png',
            }}
            productName="Bloo SynthAI"
            sections={synthaiSections}
          />
        </div>

        {/* Platform notes */}
        <section id="platform-notes" className="scroll-mt-32 py-14">
          <h3 className="text-xl font-bold text-bright">Deployment & Security</h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
            Both products are self-hosted on Kubernetes on AWS or Azure. Customer data — including
            investigation records, query payloads, and AI call content — does not leave the customer's
            environment.
          </p>
          <div className="mt-6 ml-4 border-l-2 border-secondary/40 pl-6">
            {[
              {
                title: 'Self-Hosted Kubernetes',
                description:
                  "Both products are self-hosted on Kubernetes on AWS or Azure. Customer data — including investigation records, query payloads, and AI call content — does not leave the customer's environment.",
              },
              {
                title: 'Air-Gapped Deployments',
                description:
                  'Air-gapped deployments are supported via Ollama for LLM execution. No external AI API calls required — the entire pipeline runs within the customer perimeter.',
              },
              {
                title: 'Secrets & Audit',
                description:
                  'All integration and LLM credentials are sealed in enterprise-grade secrets vaults. Session tokens use short TTLs with silent refresh. Every action, verdict, and AI reasoning step is written to an append-only audit trail that cannot be modified or deleted.',
              },
            ].map((item) => (
              <ReleaseItem key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </section>
      </div>

    </div>
  );
}
