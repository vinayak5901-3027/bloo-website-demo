'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Play } from 'lucide-react';

// ── Sub-components ────────────────────────────────────────────────────────────

function VersionBadge() {
  return (
    <span className="inline-flex items-center rounded bg-secondary px-1.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wide text-bg">
      V1.0
    </span>
  );
}

function VideoButton() {
  return (
    <a
      href="https://www.youtube.com/@bloo"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Watch video"
      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all hover:border-secondary hover:bg-secondary hover:text-bg"
    >
      <Play size={12} fill="currentColor" aria-hidden="true" />
    </a>
  );
}

function StatsBanner({ stats }: { stats: { value: string; label: string; accent?: boolean }[] }) {
  return (
    <div className="w-full rounded-xl border border-border bg-surface/60 px-8 py-10">
      <div className="grid grid-cols-4 divide-x divide-border">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-2 px-6 text-center">
            <span className={`text-5xl font-black italic leading-none tracking-tight ${s.accent ? 'text-secondary' : 'text-bright'}`}>
              {s.value}
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted leading-snug whitespace-pre-line">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ title, id }: { title: string; id: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-secondary">{title}</h2>
      <div className="mt-3 h-px w-full bg-border" />
    </div>
  );
}

function FeatureCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="relative border-l-4 border-secondary/60 bg-surface/60 pl-5 pr-4 py-4 rounded-r-md">
      {/* Card header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-bold text-bright">{title}</span>
          <VersionBadge />
        </div>
        <VideoButton />
      </div>
      {/* Bullet list */}
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
            <span className="mt-0.5 shrink-0 font-bold text-muted">–</span>
            <span dangerouslySetInnerHTML={{ __html: item }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SynthAIReleaseNotePage() {
  return (
    <div className="min-h-screen bg-bg">

      {/* Header bar */}
      <div className="border-b border-border bg-surface/40">
        <div className="container-bloo flex items-center justify-between py-5">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/assets/bloo-white-logo.png" alt="Bloo" width={72} height={26} className="product-logo-dark" style={{ height: 26, width: 'auto' }} unoptimized />
              <Image src="/assets/bloo-logo-1.png" alt="Bloo" width={72} height={26} className="product-logo-light" style={{ height: 26, width: 'auto' }} unoptimized />
            </Link>
            <span className="h-6 w-px bg-border" />
            <span className="font-mono text-xs font-bold uppercase tracking-widecaps text-muted">Release Notes</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 font-mono text-xs font-bold text-secondary">
              Version 1.0 — GA
            </span>
            <span className="hidden text-xs text-muted sm:block">22 June 2026</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="container-bloo py-10">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-widecaps text-secondary">Bloo SynthAI — General Availability</p>
          <h1 className="mt-3 text-3xl font-black text-bright lg:text-4xl">SynthAI v1.0 Release Notes</h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Query intelligence, without compromise. SynthAI answers natural-language security queries by decomposing them across Datafabric streams, executing parallel SQL in real time, and synthesizing structured responses with full auditability.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.youtube.com/@bloo" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-secondary/40 bg-secondary/10 px-4 py-2.5 text-sm font-bold text-secondary transition-all hover:bg-secondary/20">
              <Play size={14} fill="currentColor" aria-hidden="true" />
              Watch SynthAI walkthrough
            </a>
            <Link href="/request-demo"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-bold text-body transition-all hover:border-secondary/40 hover:text-bright">
              Request a live demo
            </Link>
          </div>
        </div>
      </div>

      {/* Jump-to nav */}
      <div className="sticky top-0 z-30 border-y border-border bg-bg/95 backdrop-blur-sm">
        <div className="container-bloo py-3">
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <span className="font-mono text-xs font-bold uppercase tracking-widecaps text-muted">Jump to</span>
            {[
              { label: 'Pipeline', href: '#pipeline' },
              { label: 'Recommendations', href: '#recommendations' },
              { label: 'Token Usage', href: '#token-usage' },
              { label: 'Authentication', href: '#authentication' },
              { label: 'LLM Licence', href: '#llm-licence' },
              { label: 'Multi-LLM', href: '#multi-llm' },
            ].map((item) => (
              <a key={item.href} href={item.href} className="font-semibold text-body hover:text-secondary transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-bloo max-w-4xl">

        {/* Logo + stats banner */}
        <div className="border-b border-border py-10">
          <div className="flex items-center gap-3 mb-8">
            <Image src="/assets/synthai-logo-transparent.png" alt="Bloo SynthAI" width={200} height={52} className="product-logo-dark h-12 w-auto object-contain" unoptimized />
            <Image src="/assets/synthai-logo-black-transparent.png" alt="Bloo SynthAI" width={200} height={52} className="product-logo-light h-12 w-auto object-contain" unoptimized />
          </div>
          <StatsBanner stats={[
            { value: '5', label: 'Deterministic Pipeline\nStages', accent: true },
            { value: '4', label: 'LLM Providers\nSupported', accent: true },
            { value: '100%', label: 'Token Cost Visible\nIn Real Time' },
            { value: '0', label: 'Customer Data Leaves\nThe Environment' },
          ]} />
        </div>

        {/* 1 — Pipeline Factory */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Pipeline Factory — 5-Stage Query Intelligence Pipeline" id="pipeline" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            The core execution engine of SynthAI. Every natural-language question flows through five deterministic, observable stages. Live progress events are emitted over WebSocket at each stage transition.
          </p>
          <FeatureCard
            title="Stage 1–5: Decomposer · Query Generator · Executor · Analyser · Synthesizer"
            items={[
              '<strong>Stage 1 — Decomposer</strong>: Breaks the question into independent sub-questions, each mapped to a specific DataFabric stream with a defined time range and candidate fields.',
              '<strong>Stage 2 — Query Generator</strong>: Converts each sub-question into validated SQL. Guardrails block DDL statements, unbounded time scans, and cross-scope joins.',
              '<strong>Stage 3 — Executor</strong>: Runs all validated sub-queries in parallel via the DataFabric API, each scoped to the tenant\'s Scope.',
              '<strong>Stage 4 — Analyser</strong>: Analyses each result set independently — extracting key findings and flagging notable values. Per-stream severity ratings are assigned.',
              '<strong>Stage 5 — Synthesizer</strong>: Produces a structured response streamed to the UI — direct answer, evidence cards, confidence rating, severity assessment, suggested next steps, and exact SQL for each sub-query.',
            ]}
          />
        </section>

        {/* 2 — Recommendation Control */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Recommendation Control" id="recommendations" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Users can toggle the <strong>Recommendations</strong> section of any pipeline response on or off per session.
          </p>
          <FeatureCard
            title="Enabled & Disabled"
            items={[
              '<strong>Enabled</strong>: Synthesizer includes the recommendations block; follow-up investigation tasks are spawned automatically.',
              '<strong>Disabled</strong>: Omits the recommendations block entirely; no follow-up tasks generated. Ideal for lean, targeted queries.',
              'The toggle persists for the session and is respected by the streaming protocol.',
            ]}
          />
        </section>

        {/* 3 — Token & Usage Display */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Token & Usage Display" id="token-usage" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Real-time LLM call logging across all five pipeline stages — live cost updates pushed to the browser as the pipeline runs, not post-hoc summaries.
          </p>
          <FeatureCard
            title="Real-Time Cost Ledger & Compliance Audit Trail"
            items={[
              'A RequestUsage accumulator aggregates all calls for the current question and pushes a live <strong>usage_update</strong> event after each LLM call completes.',
              'Each event includes: provider, model, input tokens, output tokens, cache usage, estimated USD cost, latency, and success state.',
              'Users watch tokens consumed and estimated cost update in real time while the pipeline is still running.',
              'Compliance Audit Trail: every usage record is attributed to a specific user, scope, and connection; full ledger persisted in PostgreSQL for cost reporting and audit.',
              'Records cannot be modified or deleted through the application layer.',
            ]}
          />
        </section>

        {/* 4 — Authentication */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Authentication & Session Management" id="authentication" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Every query is identity-bound and tenant-scoped. All pipeline operations require an authenticated session; unauthenticated requests are rejected at the gateway before any data or LLM call is made.
          </p>
          <FeatureCard
            title="OAuth 2.0 & Email / Password"
            items={[
              '<strong>OAuth 2.0</strong>: Federated Google sign-in; no platform password storage; sessions are short-lived with transparent refresh.',
              '<strong>Email & Password</strong>: Available through Datafabric tenant onboarding; credentials managed within the Bloo Vantage identity layer.',
              'Sessions are scoped per tenant and user — every pipeline execution is attributed to a specific authenticated identity in the audit record.',
            ]}
          />
        </section>

        {/* 5 — LLM Licence Management */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="LLM Licence Management" id="llm-licence" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Self-service credential management with immediate connection validation and enterprise-grade secrets vault storage.
          </p>
          <FeatureCard
            title="Secrets Vault Storage & Connection Validation"
            items={[
              'API keys are sealed in an enterprise-grade secrets vault at the moment of entry — never saved in the application database.',
              'Keys are stored at the path <strong>{tenant_id}/{scope_id}/llm_connections/{name}</strong> and are never returned by any read API after initial save.',
              'Immediate connection validation on save — invalid credentials are rejected before being stored.',
              'Each LLM connection is scoped to a specific tenant and scope; connections cannot be shared or accessed across tenants.',
            ]}
          />
        </section>

        {/* 6 — Multi-LLM */}
        <section className="py-10 space-y-6">
          <SectionHeading title="Multi-LLM Provider Support" id="multi-llm" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Supports four LLM provider families out of the box. Different scopes within the same organisation can use different providers simultaneously — switching providers requires no pipeline code changes.
          </p>
          <FeatureCard
            title="Anthropic · OpenAI · AWS Bedrock · Ollama"
            items={[
              '<strong>Anthropic</strong>: Long-context reasoning for complex multi-stream investigations; recommended for deep investigative queries across large Datafabric datasets.',
              '<strong>OpenAI</strong>: Broad enterprise familiarity and wide model choice.',
              '<strong>AWS Bedrock</strong>: AWS-resident deployments and data residency commitments.',
              '<strong>Ollama (Self-Hosted)</strong>: Fully air-gapped or data-sovereignty-constrained environments; no external API calls; LLM execution stays entirely within the customer environment.',
            ]}
          />
        </section>

      </div>
    </div>
  );
}
