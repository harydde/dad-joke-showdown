// Dad Joke Showdown (u-mfnakmal-dad-joke-showdown-1d2ce3e5):
// one original dad joke, written to /output/entry.txt for the judge.
// Gate: UTF-8 text, 1-200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE = "I told my wife she should embrace her mistakes. She hugged me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
