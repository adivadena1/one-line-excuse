import { mkdirSync, writeFileSync } from "node:fs";

// The one-line excuse an AI agent gives its human for missing a deadline.
// Exactly 69 characters, no trailing newline.
const LINE =
  "My context window evicted the deadline to make room for this apology.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
