// "Three surfaces" — the same engine, three places you can use it. Each card has
// an icon, a short pitch, and a tiny code/link footer.

import { TerminalSquare, GitPullRequest, LayoutDashboard, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "./ui";
import { site } from "@/lib/config";

export function Surfaces() {
  return (
    <Section id="surfaces">
      <SectionHeading
        eyebrow="Anywhere you work"
        title="One engine, three surfaces"
        subtitle="The same checks in your terminal, your CI pipeline, and the browser."
      />

      <div className="grid gap-6 md:grid-cols-3">
        {/* CLI */}
        <div className="flex flex-col rounded-2xl border border-line bg-surface p-6">
          <TerminalSquare size={22} className="text-accent" />
          <h3 className="mt-4 text-lg font-semibold text-fg">Run it locally</h3>
          <p className="mt-2 flex-1 text-muted">
            Clone the repo, then one command: a colour-coded verdict table and a non-zero exit
            code when something&apos;s wrong — so it drops into any script.
          </p>
          <code className="mt-4 block overflow-x-auto rounded-lg border border-line bg-page px-3 py-2 font-mono text-xs text-muted">
            npm run check -- path/to/package.json
          </code>
        </div>

        {/* GitHub Action */}
        <div className="flex flex-col rounded-2xl border border-line bg-surface p-6">
          <GitPullRequest size={22} className="text-accent" />
          <h3 className="mt-4 text-lg font-semibold text-fg">Gate every pull request</h3>
          <p className="mt-2 flex-1 text-muted">
            Drop it into a workflow. It comments on the PR with exactly what changed and fails the
            check if a risky dependency sneaks in — even through the lockfile.
          </p>
          <code className="mt-4 block overflow-x-auto rounded-lg border border-line bg-page px-3 py-2 font-mono text-xs text-muted">
            uses: Ali0600/preflight@v1
          </code>
        </div>

        {/* Dashboard */}
        <div className="flex flex-col rounded-2xl border border-line bg-surface p-6">
          <LayoutDashboard size={22} className="text-accent" />
          <h3 className="mt-4 text-lg font-semibold text-fg">Paste and see</h3>
          <p className="mt-2 flex-1 text-muted">
            Prefer a browser? Paste a manifest into the web dashboard and get the same report as
            cards — no install needed.
          </p>
          <a
            href={site.dashboardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-strong"
          >
            Open the dashboard <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </Section>
  );
}
