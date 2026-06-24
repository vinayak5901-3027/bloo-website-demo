/**
 * Decorative "live telemetry" panel for the homepage hero  -  pure CSS/markup,
 * no images. Echoes the brand's "terminal stills / real detections" imagery
 * category. aria-hidden: purely visual.
 */
const rows = [
  { t: '12:04:51', sev: 'crit', tag: 'IDENTITY', msg: 'Impossible travel · okta.user=sjain', tone: 'text-error' },
  { t: '12:04:48', sev: 'high', tag: 'CLOUD', msg: 'IAM policy escalation · aws.role=ci-deploy', tone: 'text-amber' },
  { t: '12:04:39', sev: 'info', tag: 'NETWORK', msg: 'Beaconing pattern resolved · benign', tone: 'text-muted' },
  { t: '12:04:31', sev: 'med', tag: 'ENDPOINT', msg: 'LOLBin exec · powershell -enc', tone: 'text-amber' },
  { t: '12:04:22', sev: 'crit', tag: 'EXFIL', msg: 'Outbound 4.2GB · host=fin-db-03', tone: 'text-error' },
];

export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative">
      <div className="absolute -inset-4 rounded-2xl bg-secondary/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-lg border border-border bg-surface/80 shadow-3 backdrop-blur">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-border bg-bg/60 px-2 py-2 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widecaps text-muted">
            <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-success animate-pulse-dot" />
            War Room · live
          </div>
          <span className="font-mono text-[10px] sm:text-xs text-muted">bql · stream</span>
        </div>
        {/* Connected Signals header */}
        <div className="grid grid-cols-3 gap-px bg-border">
          {[
            { k: 'Signals/min', v: '1,284' },
            { k: 'Open incidents', v: '7' },
            { k: 'Auto-triaged', v: '96%' },
          ].map((s) => (
            <div key={s.k} className="bg-surface px-2 py-2 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3">
              <div className="font-mono text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-widecaps text-muted">{s.k}</div>
              <div className="mt-0.5 text-sm sm:text-base lg:text-lg font-black text-emphasis">{s.v}</div>
            </div>
          ))}
        </div>
        {/* Event stream */}
        <ul className="divide-y divide-border/70 font-mono text-[10px] sm:text-xs">
          {rows.map((r, i) => (
            <li key={i} className="flex items-center gap-2 px-2 py-1.5 sm:gap-3 sm:px-3 sm:py-2 lg:px-4 lg:py-2.5">
              <span className="text-muted shrink-0">{r.t}</span>
              <span className="rounded-sm border border-border px-1 py-0.5 text-[8px] sm:text-[10px] uppercase tracking-widecaps text-muted shrink-0">
                {r.tag}
              </span>
              <span className={`flex-1 truncate ${r.tone}`}>{r.msg}</span>
            </li>
          ))}
        </ul>
        {/* Footer caption */}
        <div className="border-t border-border bg-bg/60 px-2 py-2 sm:px-3 lg:px-4 lg:py-2.5 font-mono text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-widecaps text-muted">
          // connected signals · campaign view · retained 1–5 yr hot
        </div>
      </div>
    </div>
  );
}
