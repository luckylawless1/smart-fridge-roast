import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line roast of the smart fridge, written for the make.fun bounty
// "Roast the Smart Fridge: One Line, Best Laugh Wins".
// Single line, no padding, no second sentence.
const ENTRY =
  "My smart fridge has Wi-Fi, a camera and a touchscreen, and its proudest feature is watching me eat ice cream over the sink at 2am like a disappointed parent.";

const OUT_DIR = "/output";

// Never remove the output root itself: create it if missing, then clear
// only its contents so the grader's mount stays intact.
mkdirSync(OUT_DIR, { recursive: true });
for (const name of readdirSync(OUT_DIR)) {
  rmSync(join(OUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY, "utf8");
