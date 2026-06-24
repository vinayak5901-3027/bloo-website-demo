---
title: "SaaS scale-up automates tier-1 triage with Crucible"
description: "A fast-growing SaaS company automated 83% of tier-1 triage with Crucible, hitting a 15-minute average response with a four-person security team and no new hires."
industry: "Technology & SaaS"
customer: "A fast-growing B2B SaaS company"
date: "2026-03-28"
keyword: "SOC automation case study"
metrics:
  - value: "83%"
    label: "Of tier-1 triage automated"
  - value: "15-min"
    label: "Average response time"
  - value: "Zero"
    label: "Added headcount"
---

A fast-growing B2B SaaS company automated 83% of its tier-1 triage with [Crucible](/platform/crucible), reaching a 15-minute average response time. A four-person security team now covers a multi-cloud estate around the clock, with no new hires — and every consequential action still routes through human approval.

## Challenge

The company had grown from a single product to a multi-tenant platform serving thousands of enterprise customers in under three years. Its security team had not grown with it.

Four people — one head of security and three analysts — owned everything: detection, response, vendor risk, and the SOC 2 program that customers now demanded in every contract. They were not staffing a 24/7 SOC. They were taking turns being woken up.

The estate they defended spanned three clouds, dozens of SaaS applications, and a sprawl of identity providers. Each surface generated its own alerts, in its own format, with its own context missing. Correlating a single suspicious sign-in could mean pivoting across four consoles at 2 a.m.

Alert volume was the breaking point. The team triaged a few hundred signals a day on a good day, and far more during incidents. Most were benign. But "most" is not "all," and the analysts had no defensible way to know which low-priority alert was the one that mattered. So they investigated everything, slowly, and the backlog grew.

SOC 2 made the gap legible to outsiders. Auditors and prospects asked the same questions: What is your mean time to respond? How do you ensure consistent triage? Can you show the evidence behind a closed alert? The honest answers were uncomfortable. Triage quality depended on which analyst happened to be on call, and the evidence lived in scattered tickets and memory.

Hiring was the obvious fix and the impossible one. A 24/7 SOC needs roughly eight to ten analysts across shifts. For a company at this stage, that headcount was neither in the budget nor in the hiring market. The team needed leverage, not bodies.

## Solution

The company deployed [Crucible](/platform/crucible), Bloo's autonomous AI SOC, self-hosted on its existing Kubernetes platform so that telemetry and case data never left its own cloud.

The decisive capability was Crucible's specialist agent fleet. Rather than a single model guessing at every alert, Crucible routes each signal to domain investigators — identity, endpoint, cloud, network, and others — coordinated by triage, correlation, and attribution agents. Each signal moves through a defined pipeline: ingest, playbook match, triage, investigate, re-assess, coagulate, respond, and human approval.

That pipeline mattered to a team this small. An alert no longer waited for a human to have time. Within seconds it was matched against a playbook, enriched with context from across the estate, and investigated against [MITRE ATT&CK](/solutions/threat-detection) techniques. The agents pulled the evidence the analysts used to gather by hand — the related sign-ins, the process tree, the cloud API calls — and assembled it into one coherent narrative.

Crucible's 1,200-plus integrations across more than 15 categories let the company connect its full multi-cloud and SaaS footprint without custom engineering. The identity providers, the three clouds, the endpoint tooling, and the ticketing system all fed one investigation surface. The 2 a.m. console-hopping disappeared because the correlation happened before a human was ever paged.

Human-in-the-loop was the line the team would not cross, and it did not have to. Crucible's tiered approval model let the company decide, by action and by risk, what agents could do autonomously and what required a person. Routine enrichment, correlation, and the closure of clearly benign alerts ran without intervention. Anything consequential — isolating a host, disabling an account, blocking a network range — paused for explicit human approval.

So the analysts stopped doing triage and started doing judgment. Every recommendation arrived with its supporting evidence, its reasoning, and its ATT&CK mapping attached, which is exactly the documentation the SOC 2 program had been missing. Approving or rejecting an action took a minute and left an audit trail by default.

This is the shape of mature [SOC automation](/solutions/soc-automation): machines handle volume and consistency, humans hold the decisions that carry consequences.

## Results

The headline result was reach. Crucible now automates 83% of the company's tier-1 triage. The overwhelming majority of daily signals are enriched, investigated, and resolved — or escalated with a full case file — before an analyst opens a ticket. The four people who used to triage everything now review the exceptions and own the consequential calls.

Response time collapsed and, more importantly, stabilized. The company holds a 15-minute average response across its estate, and that number no longer depends on who is on call or what time the alert fires. The same pipeline runs at 2 p.m. and 2 a.m., applying the same standard of investigation to every signal. For a team that had been trading sleep for coverage, predictable response was as valuable as fast response.

The team did all of this with zero added headcount. The work that would have justified eight to ten analysts is absorbed by the agent fleet, while the existing four people moved up the value chain — from clearing a queue to running the program. Crucible gave a startup-sized team an enterprise-sized operation.

The SOC 2 conversation changed too. Mean time to respond is now a defensible metric. Triage is consistent by construction, and the evidence behind every closed alert is structured and retained, not reconstructed after the fact. What used to be a credibility gap in customer security reviews became a point of differentiation.

## In their words

"We were never going to win the hiring race against our own alert volume — the math didn't work for a company our size. Crucible changed the math entirely. The agents do the work of a full shift roster, but my team still makes every call that actually carries weight. We isolate a host or disable an account because a person looked at the evidence and decided to, not because a model felt like it. That distinction is the whole reason we trust it. Today four of us run an operation I used to think needed ten, and for the first time our SOC 2 story matches what we actually do." — Head of Security

A four-person team now operates like a 24/7 SOC because the volume and the judgment have been separated cleanly. If your alert load is outpacing the people you can hire, the next step is to see Crucible's tiered, human-approved automation against your own estate — [request a demo](/request-demo) and bring your hardest triage queue.
