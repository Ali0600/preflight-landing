// Plain-English explainer — the "explain it simply" part of the brief. This is
// for a visitor who isn't deep into dependency security yet. Three short Q&As
// then a one-line takeaway.

import { Section, SectionHeading } from "./ui";

const points = [
  {
    q: "What's a dependency?",
    a: "Modern apps are built on top of hundreds of small open-source packages — the “dependencies”. You install a handful directly; each of those pulls in more, so a typical project relies on hundreds of packages you never picked yourself.",
  },
  {
    q: "What's a CVE?",
    a: "A CVE is a publicly recorded security flaw. When one is found in a package you use, your app inherits it — often through a deep dependency you didn't even know was there.",
  },
  {
    q: "Why “pre-flight”?",
    a: "Pilots run a pre-flight checklist before takeoff. Preflight does the same for your dependencies: it checks them before you add or auto-update a package, so a known-bad version never lands in your project in the first place.",
  },
];

export function Explainer() {
  return (
    <Section id="explainer" className="border-y border-line bg-surface/40">
      <SectionHeading eyebrow="New here?" title="The idea in 60 seconds" />

      {/* A definition-style list. `divide-y` draws a hairline between rows. */}
      <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {points.map((p) => (
          <div key={p.q} className="grid gap-2 p-6 md:grid-cols-[16rem_1fr] md:gap-8">
            <h3 className="text-lg font-semibold text-fg">{p.q}</h3>
            <p className="text-muted">{p.a}</p>
          </div>
        ))}
      </div>

      {/* The takeaway — a highlighted line so it reads as the "point" of the section. */}
      <p className="mt-8 text-lg text-muted">
        <span className="font-medium text-fg">That&apos;s the whole idea:</span> catch problems at
        the gate, not after they&apos;ve shipped to your users.
      </p>
    </Section>
  );
}
