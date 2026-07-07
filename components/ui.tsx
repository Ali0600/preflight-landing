// A tiny set of reusable building blocks the section components share, so the
// layout stays consistent and we don't repeat the same Tailwind classes ten times.
//
// Reminder on Tailwind: each class is one CSS rule. `px-6` = horizontal padding,
// `mx-auto` = centre horizontally, `max-w-6xl` = cap the width, `md:text-lg` =
// "on medium screens and up, use a larger font". You compose them on an element.

import Link from "next/link";
import type { ReactNode } from "react";

// Container: centres content and caps its width so lines don't stretch edge-to-edge
// on big monitors. Every section drops its content inside one of these.
export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

// Section: a full-width horizontal band with generous vertical padding and an
// `id` so the nav's anchor links (e.g. #features) can scroll to it.
export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

// Eyebrow: the small uppercase-ish label above a heading ("how it works").
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-sm font-medium tracking-wide text-accent">{children}</p>;
}

// SectionHeading: the standard title + optional subtitle pairing at the top of a section.
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-semibold tracking-tight text-fg md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted">{subtitle}</p>}
    </div>
  );
}

// CtaLink: our button. `variant="primary"` is the filled sky-blue button;
// `variant="secondary"` is the outlined one. It renders a normal link, so it
// works for both on-page anchors (#get-started) and external URLs (GitHub).
export function CtaLink({
  href,
  variant = "primary",
  children,
  external = false,
}: {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-accent text-page hover:bg-accent-strong"
      : "border border-line-strong text-fg hover:bg-surface";
  // `external` links open in a new tab; internal anchors stay in the page.
  const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link href={href} className={`${base} ${styles}`} {...extra}>
      {children}
    </Link>
  );
}
