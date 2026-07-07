// The footer — brand line on the left, links on the right. Kept deliberately simple.

import { PlaneTakeoff } from "lucide-react";
import { Container } from "./ui";
import { site } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2 text-muted">
          <PlaneTakeoff size={18} className="text-accent" />
          <span className="font-medium text-fg">{site.name}</span>
          <span className="text-faint">— dependency pre-flight, open source.</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted">
          <a href={site.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            GitHub
          </a>
          <a href={site.dashboardUrl} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
            Dashboard
          </a>
          <a href="#top" className="hover:text-fg">
            Back to top
          </a>
        </nav>
      </Container>
    </footer>
  );
}
