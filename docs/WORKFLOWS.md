# Workflows

## Product & platform workflows

### Platform lifecycle — telemetry to intelligence

```
Capture            Structure          Retain             Reason             Learn
(full fidelity) →  (metadata-first) → (hot, 1–5 yr)   →  (humans + agents) → (patterns persist)
   Datafabric ───────────────────────────────────────────────────────────────────►
        │                  │                  │                  │
     Bloo SIEM ────────────┘ detect           │             SynthAI (ask in English)
        │           600+ streaming workbooks   │                  │
     Crucible ─────────────────────────────────┴──── investigate every signal ──► Respond (human approves)
```

### Bloo SIEM — detection & investigation

```
Collect & enrich → Detect (600+ workbooks) → Correlate (Connected Signals)
   → Investigate (BQL / visual search, years of hot history) → Respond (SOAR playbooks)
```

### SynthAI — the 5-stage query pipeline (deterministic, observable)

```
Question (plain English)
  └─► 1 Decomposition  → sub-questions per data stream (optional web-search enrichment)
      └─► 2 Query generation → validated SQL with guardrails
          └─► 3 Execution → concurrent across streams
              └─► 4 Analysis → per-stream findings + severity
                  └─► 5 Synthesis → one answer + evidence + confidence + reasoning + recommendations
```

### Crucible — autonomous SOC investigation pipeline (human-in-the-loop)

```
Ingest → Playbook match → Triage ──┬─► Dismiss
                                   ├─► Escalate (SLA queue)
                                   └─► Investigate (8 specialist agents)
                                         → Re-assess → Coagulate (one incident)
                                           → Respond (proposed) → [Human approves] → Action
Action tiers:  auto-execute (safe)  |  approval by default  |  always require approval (production)
```

### Datafabric — three-phase adoption

```
Phase 1  Log repository replacement   (hot, searchable, affordable)
Phase 2  Organizational memory        (entity histories, cross-domain context)
Phase 3  Knowledge store for machines (agents reason over historical truth)
```

## How this site was built (delivery workflow)

1. **Research & analysis** — brand book, datasheets, live bloo.io, the redesign brief, the design
   skill references, and the Demo-0.1 baseline.
2. **Foundation** — Next.js + TS + Tailwind scaffold; editable design tokens; shared component
   library + page templates; typed content data layer; SEO + schema helpers.
3. **Content fan-out** — the four blog posts and three case studies were drafted in parallel by a
   multi-agent workflow against a strict brand/voice/facts brief and frontmatter schema, then
   written into `content/`.
4. **Pages** — homepage exemplar first, then all product/solution/company/utility/legal routes from
   the locked component contract.
5. **SEO infra** — sitemap, robots, manifest, dynamic OG image, per-page metadata + JSON-LD.
6. **Validate** — production build (44 routes), then a live-server SEO/a11y/perf pass (titles, meta,
   canonical, H1 uniqueness, schema validity, robots/sitemap, descriptions ≤155).
7. **Document** — this `docs/` suite + root README.

## Content publishing workflow (ongoing)

```
Pick keyword/intent → write Markdown in content/{blog|case-studies}/*.md
  → add frontmatter (see EDITING-GUIDE) → save → auto-listed + sitemapped + schema'd → deploy
```
