// page.tsx is the home page (the "/" route). In Next.js App Router, a file named
// page.tsx inside app/ becomes a page automatically — no router config needed.
//
// This page is just an ordering of the section components. Read top to bottom and
// it matches what you see scrolling down the site. Each section lives in its own
// file under components/, so this stays a clean table of contents.

import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Explainer } from "@/components/Explainer";
import { Surfaces } from "@/components/Surfaces";
import { Features } from "@/components/Features";
import { DataSources } from "@/components/DataSources";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Explainer />
        <Surfaces />
        <Features />
        <DataSources />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
