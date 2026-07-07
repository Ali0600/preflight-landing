// The "data sources" section — a trust signal. It names exactly where Preflight's
// answers come from, and hammers the point that every one is free and keyless.

import { Section, SectionHeading } from "./ui";

const sources = [
  { name: "OSV.dev", role: "Known vulnerabilities" },
  { name: "CISA KEV", role: "Confirmed exploited" },
  { name: "FIRST EPSS", role: "Exploit probability" },
  { name: "deps.dev", role: "OpenSSF Scorecard" },
  { name: "npm registry", role: "Versions & licenses" },
  { name: "PyPI", role: "Python packages" },
];

export function DataSources() {
  return (
    <Section id="data-sources" className="border-t border-line bg-surface/40">
      <SectionHeading
        eyebrow="Where the answers come from"
        title="Public data, no keys"
        subtitle="Preflight doesn't invent risk scores — it reads the same authoritative databases the security industry uses. All free, all keyless."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sources.map((s) => (
          <div
            key={s.name}
            className="flex items-baseline justify-between rounded-xl border border-line bg-surface px-5 py-4"
          >
            <span className="font-medium text-fg">{s.name}</span>
            <span className="text-sm text-faint">{s.role}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
