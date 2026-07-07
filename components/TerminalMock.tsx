// A fake terminal window for the hero. It's not a real terminal — just styled
// HTML made to look like Preflight's actual CLI output, so a visitor instantly
// "gets" what the tool produces. Everything here is static markup.

import type { ReactNode } from "react";

// One finding = a coloured verdict badge + package name, then a dim reason line.
function Finding({
  verdict,
  color,
  pkg,
  reason,
}: {
  verdict: string;
  color: string; // a Tailwind text colour class, e.g. "text-cve"
  pkg: string;
  reason: ReactNode;
}) {
  return (
    <div className="mt-3">
      <div className="flex items-center gap-3">
        {/* w-16 fixes the badge column width so package names line up. */}
        <span className={`w-16 font-medium ${color}`}>{verdict}</span>
        <span className="text-fg">{pkg}</span>
      </div>
      <div className="pl-[4.75rem] text-faint">{reason}</div>
    </div>
  );
}

export function TerminalMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40">
      {/* Window chrome: the three "traffic light" dots + a title. */}
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-danger/70" />
        <span className="h-3 w-3 rounded-full bg-pinned/70" />
        <span className="h-3 w-3 rounded-full bg-safe/70" />
        <span className="ml-2 font-mono text-xs text-faint">preflight check</span>
      </div>

      {/* Body — the "output". `leading-relaxed` adds line spacing like a real terminal. */}
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed">
        <div className="text-faint">
          <span className="text-accent">$</span> preflight check package.json
        </div>

        <div className="mt-4 text-fg">Preflight — package.json</div>
        <div className="text-faint">12 deps (5 direct · 7 transitive)</div>

        <Finding
          verdict="CVE"
          color="text-cve"
          pkg="axios@0.21.1"
          reason="3 advisories · high · EPSS 0.42"
        />
        <Finding
          verdict="PINNED"
          color="text-pinned"
          pkg="react-native@0.85.3"
          reason="framework-pinned (Expo) → npx expo install"
        />
        <Finding
          verdict="SAFE"
          color="text-safe"
          pkg="picocolors@1.0.0"
          reason="independent — safe to auto-update"
        />

        <div className="mt-4 text-fg">Data sources</div>
        <div className="text-faint">
          <span className="text-safe">✓</span> OSV · CISA KEV · FIRST EPSS · deps.dev
          <span className="ml-2 text-faint">keyless</span>
        </div>
      </div>
    </div>
  );
}
