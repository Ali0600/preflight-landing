// The sticky top navigation bar.
//
// `sticky top-0 z-50` keeps it pinned to the top as you scroll (z-50 stacks it
// above the page). The translucent background + `backdrop-blur` let the content
// show through faintly — a common modern-landing-page look.

import { PlaneTakeoff } from "lucide-react";
import { GithubIcon } from "./icons";
import { Container, Button } from "./ui";
import { site } from "@/lib/config";

// The in-page anchor links. Each href points at a section `id` we set later.
const links = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Data sources", href: "#data-sources" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-page/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2 font-semibold text-fg">
          <PlaneTakeoff size={20} className="text-accent" />
          {site.name}
        </a>

        {/* Centre links — hidden on small screens (`hidden md:flex`) to keep mobile tidy. */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right-side actions */}
        <div className="flex items-center gap-3">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub repository"
            className="text-muted transition-colors hover:text-fg"
          >
            <GithubIcon size={20} />
          </a>
          <Button href="#get-started">Get started</Button>
        </div>
      </Container>
    </header>
  );
}
