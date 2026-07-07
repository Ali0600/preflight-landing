// The ONLY interactive component on the site, so it's a good one to learn from.
//
// "use client" is the important line. By default, Next.js App Router components
// are *Server Components* — they run once on the server and send finished HTML.
// That's great for static content but means no browser features (no onClick, no
// useState). Adding "use client" at the top turns this file into a *Client
// Component* that also runs in the browser, so it can respond to clicks and hold
// state (whether we just copied). Keep "use client" on the few interactive leaves,
// not the whole tree, so the rest stays lightweight server-rendered HTML.
"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({ text }: { text: string }) {
  // useState gives this component a memory across re-renders: `copied` is the
  // current value, `setCopied` changes it and re-renders the button.
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    // navigator.clipboard is a browser API — only available because we're a client component.
    await navigator.clipboard.writeText(text);
    setCopied(true);
    // Flip the label back to "copy" after 2 seconds.
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy install command"
      className="shrink-0 rounded-md border border-line p-2 text-faint transition-colors hover:border-line-strong hover:text-fg"
    >
      {copied ? <Check size={16} className="text-safe" /> : <Copy size={16} />}
    </button>
  );
}
