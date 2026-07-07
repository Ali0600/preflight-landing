// "How it works" — three plain-English steps. Mirrors the reference site's
// three-beat structure (point / say / ship → point / check / verdict).

import { Crosshair, Radar, ListChecks } from "lucide-react";
import { Section, SectionHeading } from "./ui";

// The steps as data. Keeping content in an array (instead of copy-pasting three
// near-identical blocks of JSX) means the layout is written once, below.
const steps = [
  {
    icon: Crosshair,
    title: "Point it at your manifest",
    body: "Run it on your package.json or requirements.txt. Preflight reads the whole dependency graph from your lockfile — the packages you chose and the hundreds they quietly pull in.",
  },
  {
    icon: Radar,
    title: "It checks every dependency",
    body: "Each package is looked up across OSV, CISA KEV, FIRST EPSS and deps.dev — all free, keyless databases. Nothing is uploaded; Preflight just asks public sources what's known about each version.",
  },
  {
    icon: ListChecks,
    title: "You get a clear verdict",
    body: "Every dependency gets one plain label — safe, CVE, malware, framework-pinned, incompatible or stale — with the reason and how to fix it. Green means go.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps, no setup"
        subtitle="Preflight is one command. Here's what happens when you run it."
      />

      {/* A responsive grid: 1 column on mobile, 3 on medium screens and up. */}
      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="rounded-2xl border border-line bg-surface p-6"
          >
            {/* Numbered icon badge. */}
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <step.icon size={20} />
              </span>
              <span className="font-mono text-sm text-faint">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-fg">{step.title}</h3>
            <p className="mt-2 text-muted">{step.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
