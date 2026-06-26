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

function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="relative border-l-4 border-secondary/60 bg-surface/60 pl-5 pr-4 py-4 rounded-r-md">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-bold text-bright">{title}</span>
          <VersionBadge />
        </div>
        <VideoButton />
      </div>
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

export default function CrucibleReleaseNotePage() {
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
          <p className="font-mono text-xs uppercase tracking-widecaps text-secondary">Bloo Crucible — General Availability</p>
          <h1 className="mt-3 text-3xl font-black text-bright lg:text-4xl">Crucible v1.0 Release Notes</h1>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Crucible orchestrates a fleet of specialist AI agents to investigate every incoming signal, produce structured verdicts, and propose response actions — with a human in control of every consequential step.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://www.youtube.com/@bloo" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-secondary/40 bg-secondary/10 px-4 py-2.5 text-sm font-bold text-secondary transition-all hover:bg-secondary/20">
              <Play size={14} fill="currentColor" aria-hidden="true" />
              Watch Crucible walkthrough
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
              { label: 'Triage Agent', href: '#triage-agent' },
              { label: 'Signal Sources', href: '#signal-sources' },
              { label: 'Integrations', href: '#integrations' },
              { label: 'Escalation', href: '#escalation' },
              { label: 'Playbooks', href: '#playbooks' },
              { label: 'Multi-LLM', href: '#multi-llm' },
              { label: 'Authentication', href: '#authentication' },
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
            <Image src="/assets/crucible-logo-transparent.png" alt="Bloo Crucible" width={200} height={52} className="product-logo-dark h-12 w-auto object-contain" unoptimized />
            <Image src="/assets/crucible-logo-black-transparent.png" alt="Bloo Crucible" width={200} height={52} className="product-logo-light h-12 w-auto object-contain" unoptimized />
          </div>
          <StatsBanner stats={[
            { value: '1,200+', label: 'Pre-Built\nAdapters', accent: true },
            { value: '15+', label: 'Integration\nCategories', accent: true },
            { value: '5', label: 'LLM Providers\nSupported' },
            { value: '0', label: 'Customer Data Leaves\nThe Environment' },
          ]} />
        </div>

        {/* 1 — Triage Agent */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Triage Agent" id="triage-agent" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Orchestrates the full investigation pipeline and produces a final structured threat verdict on every incoming signal.
          </p>
          <FeatureCard
            title="Triage Verdict — Active · Benign · False"
            items={[
              '<strong>Active</strong>: A genuine, live threat requiring investigation or response.',
              '<strong>Benign</strong>: Real activity but not a threat.',
              '<strong>False</strong>: Detection misfired; no corresponding real-world event.',
              'Structured Output — every run produces: verdict, confidence score (0–100%), action routing (respond / dismiss / escalate), and human-readable reasoning.',
              'FP rates are evaluated in parallel across all 12 signal IOC fields.',
              'Confidence-Threshold Investigation Loop — terminates as soon as the aggregate threat score crosses a configurable threshold (default: 80%).',
              'Fast-Path Priority Order: playbook critical finding → escalate; FP rate exceeds dismiss threshold → dismiss; detection score at escalation threshold → escalate.',
            ]}
          />
        </section>

        {/* 2 — Signal Sources */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Signal Sources" id="signal-sources" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Single-tenant ingestion via Bloo Vantage, configured in two UI steps — no code required.
          </p>
          <FeatureCard
            title="Connection Configuration & Field Mapping"
            items={[
              '<strong>Connection Configuration</strong>: defines Base URL, Cluster/Tenant identifier, Stream (SIGNALS; 30-second poll default), and Timezone.',
              'Credentials stored as a Bearer Token sealed in Vault — never exposed after initial save.',
              '<strong>Field Mapping</strong>: raw source fields mapped to Crucible\'s 10 canonical signal fields through a point-and-click UI with live sample values.',
              'Canonical fields include: DetectionName, SuspectHost, DetectionTactic, DetectionConfidence, SuspectUser, TargetHost, and 4 more.',
            ]}
          />
        </section>

        {/* 3 — Integrations */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Integrations" id="integrations" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            1,200+ pre-built adapters across 15+ categories — connecting to virtually every tool in the modern enterprise security stack.
          </p>
          <FeatureCard
            title="Threat Intelligence · SIEM · Network · EDR · Cloud · Identity · Email · Forensics"
            items={[
              '<strong>Threat Intelligence (400+)</strong>: VirusTotal, Recorded Future, AbuseIPDB, GreyNoise, MITRE ATT&CK and 395+ more.',
              '<strong>SIEM & Analytics (145+)</strong>: Splunk, Microsoft Sentinel, Elastic Security, Chronicle, QRadar.',
              '<strong>Network Security (140+)</strong>: Palo Alto, Fortinet, Check Point, Cisco, Zscaler.',
              '<strong>EDR & Endpoint (80+)</strong>: CrowdStrike, Microsoft Defender, SentinelOne, Cortex XDR.',
              '<strong>Cloud Platforms (85+)</strong>: AWS CloudTrail, Azure Activity Logs, GCP Audit Logs.',
              '<strong>Identity & Access (55+)</strong>: Okta, Entra ID, Active Directory, CyberArk.',
              '<strong>Email Security (35+)</strong>: Proofpoint, Abnormal, Mimecast, O365.',
              '<strong>Forensics & Malware (40+)</strong>: Sandbox and malware analysis tools.',
              'All credentials are sealed in the customer\'s chosen enterprise vault.',
            ]}
          />
        </section>

        {/* 4 — Human Escalation */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Human Escalation" id="escalation" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Structured escalation emails sent to analyst distribution lists with one-click deep links into the full investigation view.
          </p>
          <FeatureCard
            title="Escalation Email & Ticket Creation"
            items={[
              'Signal summary and detection context included in every escalation email.',
              'Triage verdict and confidence score surfaced at the top of each notification.',
              'Top evidence highlights extracted automatically — analysts arrive pre-briefed.',
              'Deep link to Signal Execution View — one click takes the analyst directly to the live investigation in Crucible.',
              '<strong>Ticket Creation (UI)</strong>: escalated signals raised as tickets from the Crucible UI, pre-populated with verdict, confidence, key findings, and recommended actions.',
            ]}
          />
        </section>

        {/* 5 — Playbooks */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Playbooks" id="playbooks" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Auto-matched to every incoming signal — no manual selection required. Ships with pre-built detection content covering the full MITRE ATT&CK threat landscape.
          </p>
          <FeatureCard
            title="Step Type — Query · Enrich · Triage · Respond"
            items={[
              '<strong>query</strong>: Fetch evidence from integrations.',
              '<strong>enrich</strong>: Augment IOCs with threat intelligence.',
              '<strong>triage</strong>: Run Investigation Agents; aggregate threat score.',
              '<strong>respond</strong>: Execute response actions via integrations.',
              'Three-step resolution: mapping cache → AI selection → scoring fallback.',
            ]}
          />
          <FeatureCard
            title="Lifecycle — Unpublished · Published · Draft · Retired"
            items={[
              '<strong>Unpublished → Published</strong>: A new playbook must be explicitly published before it can be matched to signals.',
              '<strong>Draft</strong>: Edits to a live playbook create a Draft automatically — the active version is never modified until the draft is explicitly published.',
              '<strong>Retired</strong>: Soft-deleted; remains accessible for audit but cannot be matched to new signals.',
            ]}
          />
        </section>

        {/* 6 — Multi-LLM */}
        <section className="border-b border-border py-10 space-y-6">
          <SectionHeading title="Multi-LLM Provider Support" id="multi-llm" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Not vendor-locked — different pipeline stages can use different providers independently. Organisations choose the LLM that fits their cost, performance, and data-sovereignty requirements.
          </p>
          <FeatureCard
            title="Anthropic · AWS Bedrock · Google Gemini · OpenAI · Ollama"
            items={[
              '<strong>Anthropic Claude</strong>: Complex multi-step reasoning; recommended for triage and investigation stages where long-context understanding matters most.',
              '<strong>AWS Bedrock</strong>: AWS-resident deployments and data residency commitments.',
              '<strong>Google Gemini</strong>: GCP-aligned enterprises.',
              '<strong>OpenAI</strong>: Broad enterprise familiarity and wide model selection.',
              '<strong>Ollama (Self-Hosted)</strong>: Fully air-gapped environments; triage stage support targeted for a subsequent release.',
            ]}
          />
        </section>

        {/* 7 — Authentication */}
        <section className="py-10 space-y-6">
          <SectionHeading title="Authentication & Session Management" id="authentication" />
          <p className="text-sm leading-relaxed text-muted max-w-2xl">
            Every platform interaction is identity-bound, tenant-scoped, and fully attributable. All pipeline operations require an authenticated session.
          </p>
          <FeatureCard
            title="OAuth 2.0 with PKCE & Email / Password"
            items={[
              '<strong>OAuth 2.0 with PKCE (Google)</strong>: Users sign in through their existing Google account via federated OAuth 2.0; no passwords stored on the platform; PKCE enforced throughout.',
              '<strong>Email & Password</strong>: Available to users provisioned through Bloo Vantage tenant onboarding; credentials managed within the Bloo Vantage identity layer.',
              'Unauthenticated requests are rejected before any investigation or LLM call is initiated.',
              'All sessions are tenant-scoped — cross-tenant access is architecturally impossible.',
            ]}
          />
        </section>

      </div>
    </div>
  );
}
