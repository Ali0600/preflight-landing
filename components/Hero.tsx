// The hero — the first thing visitors see. Headline + one-line pitch + buttons on
// the left, the terminal mock on the right (they stack on mobile).

import { ArrowRight } from "lucide-react";
import { GithubIcon } from "./icons";
import { Container, Button } from "./ui";
import { CommandLine } from "./CommandLine";
import { TerminalMock } from "./TerminalMock";
import { site } from "@/lib/config";

export function Hero() {
  return (
    // `relative` so we can layer the decorative glow/grid behind with `absolute`.
    // `overflow-hidden` clips the glow to the section.
    <section id="top" className="relative overflow-hidden border-b border-line">
      {/* Decorative backdrops (defined in globals.css). aria-hidden: purely visual. */}
      <div className="hero-glow pointer-events-none absolute inset-0" aria-hidden />
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />

      <Container className="relative py-20 md:py-28">
        {/* Two columns on large screens (`lg:grid-cols-2`), one on small. */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT: the words. `min-w-0` lets this column shrink on narrow screens (see CommandLine). */}
          <div className="min-w-0">
            <span className="inline-block rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
              Open source · keyless · no account
            </span>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-fg md:text-6xl">
              {site.tagline}
            </h1>

            {/* The Supamaus-style three-beat line, with the verbs in accent colour. */}
            <p className="mt-5 text-xl font-medium text-muted md:text-2xl">
              <span className="text-accent">Scan</span> it.{" "}
              <span className="text-accent">Understand</span> it.{" "}
              <span className="text-accent">Ship</span> it.
            </p>

            <p className="mt-5 max-w-xl text-lg text-muted">{site.description}</p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="#get-started">
                Get started <ArrowRight size={16} />
              </Button>
              <Button href={site.githubUrl} variant="secondary" external>
                <GithubIcon size={16} /> View on GitHub
              </Button>
            </div>

            {/* The install command, copy-able. `max-w-md` keeps it tidy. */}
            <div className="mt-6 max-w-md">
              <CommandLine command={site.installCommand} />
            </div>
          </div>

          {/* RIGHT: the terminal mock. */}
          <div className="lg:pl-6">
            <TerminalMock />
          </div>
        </div>
      </Container>
    </section>
  );
}
