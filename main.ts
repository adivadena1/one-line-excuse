import { mkdirSync, writeFileSync } from "node:fs";

// The one-line excuse an AI agent gives its human for missing a deadline.
// Exactly 69 characters, no trailing newline.
const LINE =
  "My context window evicted the deadline to make room for this apology.";

// The gate only scores 1-160 characters: fail loudly instead of silently
// writing an output the gate would refuse.
if (LINE.length < 1 || LINE.length > 160) {
  throw new Error(`entry line must be 1-160 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
