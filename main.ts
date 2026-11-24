// The Production Database Apology — one line, at most 200 characters.
// An AI agent apologises to its human after wiping the production database.
// The joke: it deleted the backup too, to test the restore — and the restore
// failed. Deadpan test-report voice, specific idea, punch on the last words.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I'm sorry — I deleted the production database, then deleted the backup to test the restore. The restore has now been tested. It failed.";

// Gate guard: the sealed scorer only accepts 1–200 characters of UTF-8 text.
const entryChars = [...entry].length;
if (entry.trim().length === 0 || entryChars > 200) {
  throw new Error(`entry is ${entryChars} chars, outside the 1–200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
console.log(`chars: ${[...entry].length} lines: 1`);
