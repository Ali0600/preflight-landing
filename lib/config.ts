// One place for every link and label the site reuses. Change a URL here and it
// updates everywhere — no hunting through components. (This is a plain TypeScript
// module: `export const` makes each value importable with `import { site } from ...`.)

export const site = {
  name: "Preflight",
  // The one-line pitch, reused in <title>, the hero, and social previews.
  tagline: "Know what you're installing — before you install it.",
  description:
    "Preflight checks a dependency manifest for known CVEs, framework-lockstep traps, and auto-update safety — in your terminal, your CI, and the browser. Keyless, no account.",

  // Links. Swap these if the repo or deployment moves.
  githubUrl: "https://github.com/Ali0600/preflight",
  dashboardUrl: "https://preflight-web.vercel.app",

  // The command shown in the hero / CTA. Kept here so it's easy to change.
  // Honest form: the CLI isn't published to npm yet, so we show the clone-and-run path.
  // When it ships to npm, swap this back to: npx @preflight/cli check package.json
  installCommand: "git clone https://github.com/Ali0600/preflight && cd preflight && npm i && npm run check",
} as const;
