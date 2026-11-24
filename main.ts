// roast-gadget: writes one one-line roast to /output/entry.txt.
// Node 22, standard library only.
//
// The roast: the phone that holds every secret is the one gadget that
// fails to recognise its owner before coffee — it "forgets" us first,
// so the punch lands on the gadget's betrayal, not on the user.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My phone's face unlock doesn't recognize me before coffee, so the gadget that knows all my secrets pretends we've never met.";

// The gate only accepts 1-200 characters; refuse to write anything else.
// 124 characters: inside the 80-130 sweet spot for a one-line joke.
if (ROAST.length < 1 || ROAST.length > 200) {
  throw new Error(`roast must be 1-200 characters, got ${ROAST.length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
