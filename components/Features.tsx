// The feature grid — eight cards, driven by a data array so the markup is written
// once. The first card (the framework-lockstep registry) is Preflight's real
// differentiator, so it leads.

import {
  Layers,
  Network,
  Gauge,
  Bug,
  ScrollText,
  ShieldCheck,
  FileCode2,
  KeyRound,
  type LucideIcon,
} from "lucide-react";
import { Section, SectionHeading } from "./ui";

type Feature = { icon: LucideIcon; title: string; body: string };

const features: Feature[] = [
  {
    icon: Layers,
    title: "Framework-lockstep aware",
    body: "Knows that Expo, Next.js, Angular and others pin a set of packages together — so it won't tell you to bump one and break the build. It points you at the framework's own upgrade command instead.",
  },
  {
    icon: Network,
    title: "Whole-lockfile scan",
    body: "Scans the entire installed graph, not just what you declared — because most exploitable flaws hide in transitive dependencies you never chose.",
  },
  {
    icon: Gauge,
    title: "Exploit prioritization",
    body: "Pairs each CVE with FIRST EPSS (how likely it's exploited) and CISA KEV (confirmed exploited in the wild), so you fix what actually matters first.",
  },
  {
    icon: Bug,
    title: "Malware & typosquats",
    body: "Flags known-malicious packages and names that look like a typo of a popular one — the lodahs → lodash trick attackers use.",
  },
  {
    icon: ScrollText,
    title: "Transparency ledger",
    body: "Every scan shows which data sources it checked and what each returned — a green result you can actually inspect, not a black box.",
  },
  {
    icon: ShieldCheck,
    title: "Fails closed",
    body: "If a data source is unreachable, the CI gate fails loudly instead of quietly passing. A security check that couldn't run is not a pass.",
  },
  {
    icon: FileCode2,
    title: "Standard outputs",
    body: "Emits a CycloneDX SBOM and SARIF, so findings show up in GitHub's Security tab and slot into tools you already use.",
  },
  {
    icon: KeyRound,
    title: "Keyless & private",
    body: "No API keys, no account, no sign-up. It only queries public databases; your code never leaves your machine.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="Features"
        title="Built to be trusted"
        subtitle="The details that make Preflight worth putting in front of your builds."
      />

      {/* 1 column on mobile, 2 on small, 4 on large. */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-line bg-surface p-6">
            <f.icon size={22} className="text-accent" />
            <h3 className="mt-4 font-semibold text-fg">{f.title}</h3>
            <p className="mt-2 text-sm text-muted">{f.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
