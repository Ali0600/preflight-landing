// layout.tsx is the ONE wrapper every page in a Next.js "App Router" project
// renders inside. It defines the <html> and <body> tags, loads fonts, and sets
// the metadata (the browser-tab title, the description search engines show, and
// the preview card links unfurl on social media). We only have one page, so this
// wraps that page.

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/config";

// next/font downloads these Google fonts at build time and self-hosts them (no
// request to Google at runtime → faster and more private). Each call gives us a
// CSS variable we can point Tailwind at (see globals.css `--font-sans`).
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Next.js reads this `metadata` export and turns it into <title>, <meta> and
// Open Graph tags automatically — no need to write <head> by hand.
export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // The font variables are attached here so every element can use them.
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
