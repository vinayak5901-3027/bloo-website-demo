---
title: "How a global bank cut log costs 62% with five-year hot retention"
description: "A Fortune 500 bank replaced ingestion-priced tooling with Bloo, consolidating 11 tools and keeping five years of telemetry hot — at 62% lower cost."
industry: "Financial services"
customer: "A Fortune 500 global bank"
date: "2026-05-02"
keyword: "SIEM cost reduction case study"
metrics:
  - value: "62%"
    label: "Lower log + SIEM cost"
  - value: "5 years"
    label: "Hot, searchable retention"
  - value: "11 to 1"
    label: "Tools consolidated"
---

A Fortune 500 global bank replaced ingestion-priced security tooling with Bloo, running entirely inside its own cloud. By capturing full-fidelity telemetry, retaining five years of it hot, and consolidating 11 tools into one platform, the bank cut its combined log and SIEM cost by 62% — without dropping a single source.

## The challenge

The bank's security data estate had been shaped by its bill, not its risk model. Its incumbent SIEM priced on ingestion, so every additional gigabyte of telemetry carried a recurring penalty.

The predictable consequence followed. To keep spend in check, the security team dropped high-volume sources — DNS, endpoint process events, cloud audit logs — and capped retention at 90 days for most of what remained.

That left the SOC investigating with partial memory. Analysts could see what happened last quarter, but a slow-burn intrusion that began six months earlier was invisible by the time it surfaced. The data simply no longer existed.

Cost pressure had also fragmented the estate. Eleven separate tools handled ingestion, search, detection, long-term archive, and compliance reporting, each with its own query language, retention tier, and licensing meter. Correlating an alert across them meant exporting, reformatting, and stitching results by hand.

Two regulatory currents made the gaps untenable. PCI DSS required demonstrable log integrity and retention well beyond the 90-day window the bank could afford to keep hot. The EU's Digital Operational Resilience Act (DORA) raised the bar further, expecting the bank to reconstruct and evidence operational events across multi-year horizons — including incidents it might not detect for months.

The team faced an unworkable trade. Pay escalating ingestion fees for full coverage, or accept blind spots that auditors and adversaries would both eventually find.

## The solution

The bank deployed [Bloo Datafabric](/platform/datafabric) as its telemetry memory layer and [Bloo SIEM](/platform/bloo-siem) for detection and response, both running inside the bank's own cloud tenancy. Data never left the institution's security and sovereignty boundary.

The first decision was to stop pricing security by the gigabyte. Bloo carries no ingestion penalties, so the team re-enabled every source it had been forced to drop. DNS, full endpoint process telemetry, and cloud audit trails came back online — captured at full fidelity rather than sampled or summarized.

Datafabric absorbed that volume through up to 98% compression and deduplication, which is what made the economics invert. Instead of paying more to keep more, the bank kept everything and paid less.

Retention moved from a 90-day ceiling to five years, fully hot and searchable. An analyst can now query a 2026 alert against raw 2021 telemetry in the same interface, at the same speed, with no rehydration step from cold archive. This is the core of a [SIEM modernization](/solutions/siem-modernization) program: memory that stays online long enough to matter.

With full-fidelity data flowing, the team turned on Bloo SIEM's real-time detection. More than 600 streaming detection workbooks now run against live telemetry, and Connected Signals triage uses cognitive ML to group related alerts into coherent incidents — collapsing what had been a manual cross-tool correlation chore into a single ranked view.

Consolidation followed naturally. As ingestion, search, detection, long-term retention, and compliance reporting converged onto one platform, the surrounding tools lost their purpose. Eleven systems became one.

## The results

The headline outcome was a 62% reduction in combined log and SIEM cost. That figure is net of the additional telemetry the bank re-enabled — the team is now retaining far more data, for far longer, while spending substantially less than it did under ingestion pricing.

Retention told the second part of the story. Hot, searchable history extended from 90 days to five years, a roughly 20-fold increase in the window available to investigators and auditors. DORA and PCI evidence requests that once meant retrieving and reassembling cold archives now resolve as ordinary interactive queries.

Tool consolidation delivered the third result. Going from 11 tools to one removed a tangle of overlapping licenses, retention tiers, and query languages. The team retired the operational overhead of maintaining parallel systems and the budget that had been quietly draining into each.

The qualitative gains compounded the metrics. With full-fidelity capture restored, the SOC closed the blind spots that sampling had created — long-dwell intrusions that begin quietly now leave a complete, queryable trail. Threat detection improved because detections finally run against the whole signal rather than a cost-trimmed fraction of it, strengthening the bank's broader [threat detection](/solutions/threat-detection) posture.

Investigations also got faster. Connected Signals triage and a single query surface meant analysts stopped exporting and stitching data across eleven consoles. Time that had gone to plumbing went back to analysis.

Crucially, the cost line became predictable. Because spend no longer tracks ingestion volume, the security team can add new sources, expand coverage, and absorb organic data growth without renegotiating its budget every quarter. Capacity planning shifted from a financial constraint to an engineering decision.

## In their words

> "We had been making security decisions to protect a budget line, not to protect the bank. Ingestion pricing meant every new log source was a cost argument, so we kept dropping data and shortening retention until our SOC was effectively working blind past 90 days.
>
> Bloo broke that link. We turned every source back on, we keep five years of it hot, and we consolidated eleven tools into one — and we are spending 62% less than before. The first time an analyst pulled raw telemetry from three years ago to close out a DORA evidence request in seconds, the room understood that we had changed what was possible, not just what was cheaper."
>
> — Director of Security Operations, Fortune 500 global bank

The bank's next phase moves from retained memory to autonomous reasoning over it: extending the same full-fidelity telemetry into agent-driven investigation and [SOC automation](/solutions/soc-automation), so the five years of history it now keeps becomes something its analysts — and its agents — actively reason over. To see how full-fidelity capture and multi-year hot retention would reshape your own cost and coverage, [request a demo](/request-demo).
