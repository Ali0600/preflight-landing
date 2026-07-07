# Preflight — landing page

A single-page marketing site for [Preflight](https://github.com/Ali0600/preflight), the
keyless dependency pre-flight tool. Built with **Next.js** and **Tailwind CSS**.

This README doubles as a **beginner walkthrough**: if you've never built a Next.js + Tailwind
site, read it top to bottom and you'll understand how every piece fits together. Every source
file is also heavily commented for the same reason.

---

## Run it

```bash
npm install     # install dependencies (once)
npm run dev     # start the dev server → http://localhost:3000
npm run build   # produce the optimized production build
npm run lint    # check code style
```

`npm run dev` gives you hot reload: save a file and the browser updates instantly.

---

## The 5-minute mental model

### 1. Next.js App Router — files *are* the routing

There's no router config. In the **App Router**, the folder structure decides the pages:

- `app/layout.tsx` — the outer shell every page renders inside. It defines `<html>`/`<body>`,
  loads the fonts, and sets the page title + social-preview metadata.
- `app/page.tsx` — the home page (the `/` route). A file called `page.tsx` in a folder
  automatically becomes a page. Ours just lists the sections in order.
- `app/globals.css` — the one stylesheet (see Tailwind below).

Our whole site is one page, so `page.tsx` is basically a table of contents.

### 2. Server vs Client components

By default, App Router components are **Server Components**: they run once on the server and
send finished HTML to the browser. That's perfect for static content (fast, lightweight) but
they can't use browser features like `onClick`.

To make a component interactive, you add `"use client"` at the very top of the file — that turns
it into a **Client Component** that also runs in the browser. We only do this in **one** place:
[`components/CopyButton.tsx`](components/CopyButton.tsx) (the copy-to-clipboard button). Everything
else stays a lightweight Server Component. The lesson: put `"use client"` only on the small
interactive leaves, not the whole tree.

### 3. Tailwind CSS — styling with utility classes

Instead of writing separate CSS, you style elements by stacking small **utility classes** right
in the markup:

```tsx
<div className="rounded-2xl border border-line bg-surface p-6">
```

That reads as: rounded corners, a border in our `line` colour, a `surface` background, and
padding. Each class is one CSS rule. Responsive variants use a screen-size prefix —
`md:grid-cols-3` means "3 columns on medium screens and up" (mobile-first: no prefix = the
smallest screen).

Tailwind **v4** is configured in CSS, not a JS file. In `app/globals.css`:

- `@import "tailwindcss";` pulls in all the utility classes.
- `@theme { --color-accent: #85b7eb; ... }` defines our design tokens. Every token becomes a
  class — `--color-accent` gives us `text-accent`, `bg-accent`, `border-accent`, and so on.

So our whole colour palette lives in one `@theme` block, and the components just reference it by
name (`text-fg`, `bg-surface`, `border-line`, `text-accent`).

---

## Folder map

```
app/
  layout.tsx        outer shell: <html>, fonts, page metadata
  page.tsx          the home page — lists the sections in order
  globals.css       Tailwind import + the colour/theme tokens
components/
  ui.tsx            shared building blocks: Container, Section, SectionHeading, CtaLink
  Nav.tsx           sticky top navigation bar
  Hero.tsx          the headline + pitch + buttons + terminal mock
  TerminalMock.tsx  the fake CLI-output window in the hero
  HowItWorks.tsx    the three-step "how it works"
  Explainer.tsx     plain-English "the idea in 60 seconds"
  Surfaces.tsx      CLI / GitHub Action / dashboard cards
  Features.tsx      the 8-card feature grid
  DataSources.tsx   the "where the data comes from" section
  CTA.tsx           the final call-to-action
  Footer.tsx        the footer
  CommandLine.tsx   the copy-able "$ npx ..." pill
  CopyButton.tsx    the only interactive (client) component
  icons.tsx         a hand-rolled GitHub logo (see gotchas)
lib/
  config.ts         all the links + text in one place (edit here)
```

Read `app/page.tsx` first — it names every section in order, and each name is a file above.

---

## How to change things

- **Wording, links, the install command** → [`lib/config.ts`](lib/config.ts). One file, used
  everywhere.
- **Colours / theme** → the `@theme` block in [`app/globals.css`](app/globals.css).
- **A section's content** → its file in `components/`. Most sections keep their content in a
  small data array near the top, then render it once — change the array, change the page.
- **Add a new section** → make `components/MySection.tsx`, then drop `<MySection />` into
  `app/page.tsx` where you want it.

---

## Deploy

It's a fully static site, so it deploys anywhere. The easiest is **Vercel** (the makers of
Next.js): push this folder to a GitHub repo, import it at [vercel.com/new](https://vercel.com/new),
and it builds and hosts it automatically. No configuration needed.

---

## Gotchas we hit (so you don't)

- **`lucide-react` removed brand logos.** The `Github` icon no longer exists in the icon library
  (trademark reasons), so the GitHub logo is a small hand-written SVG in
  [`components/icons.tsx`](components/icons.tsx).
- **Flex/grid children can overflow on mobile.** A flex child defaults to `min-width: auto`, which
  refuses to shrink below its content — a long, un-wrapping command was pushing the hero off the
  side of the screen. The fix is `min-w-0` on the child, which lets `overflow-x-auto` scroll it
  instead. See the comment in [`components/CommandLine.tsx`](components/CommandLine.tsx).

---

## Tech

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript · lucide-react (icons).
