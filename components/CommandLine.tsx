// A small "terminal prompt" pill showing a command with a copy button on the end.
// Used in the hero and the final call-to-action, so it lives in its own file.

import { CopyButton } from "./CopyButton";

export function CommandLine({ command }: { command: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3 font-mono text-sm">
      {/* The dim $ is the classic shell prompt; select-none keeps it out of copy-drags. */}
      <span className="select-none text-faint">$</span>
      {/* min-w-0 is the important bit: a flex child defaults to min-width:auto, which would
          refuse to shrink below the command's full width and push the whole layout off-screen
          on mobile. min-w-0 lets it shrink so `overflow-x-auto` can scroll instead. */}
      <code className="min-w-0 flex-1 overflow-x-auto whitespace-nowrap text-fg">{command}</code>
      <CopyButton text={command} />
    </div>
  );
}
