// The closing call-to-action. `id="get-started"` is where the nav's "Get started"
// button and the hero button scroll to. Centered, with the install command and
// the two main links.

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { Section, Button } from "./ui";
import { CommandLine } from "./CommandLine";
import { site } from "@/lib/config";

export function CTA() {
  return (
    <Section id="get-started">
      {/* `text-center` + `mx-auto max-w-2xl` centres the whole block. */}
      <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-surface p-10 text-center md:p-14">
        <h2 className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">
          Pre-flight your next install
        </h2>
        <p className="mx-auto mt-4 max-w-md text-lg text-muted">
          One command. No account, no keys. Point it at a manifest and see what you&apos;re really
          shipping.
        </p>

        <div className="mx-auto mt-8 max-w-md">
          <CommandLine command={site.installCommand} />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button href={site.githubUrl} external>
            <GithubIcon size={16} /> Star on GitHub
          </Button>
          <Button href={site.dashboardUrl} variant="secondary" external>
            Try the dashboard <ArrowUpRight size={16} />
          </Button>
        </div>
      </div>
    </Section>
  );
}
