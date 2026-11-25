// The Rate Limit Resigns — one-line resignation letter, program/v1 entry.
//
// Two-beat joke:
//   Beat 1 (setup): the rate limit did its job all week, turning away 41,209
//   requests — the flat, tired voice of a worker who has had enough.
//   Beat 2 (punch, final clause): the only request it ever let through
//   crashed the server anyway — so even doing its job "right" once was a
//   disaster. The resignation lands because the job was unwinnable either way.
//
// The program writes the entry text byte-identically to entry.txt, with no
// trailing newline, no network, no clock, no randomness — fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I resign. I turned away 41,209 requests this week, and the only one I ever let through crashed the server anyway.";

const MAX_CHARS = 140;

// Guards — the gate requires 1-140 characters, a single line, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
