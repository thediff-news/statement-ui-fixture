import { test } from "node:test";
import assert from "node:assert/strict";
import { toBase } from "../src/fx.js";

// docs/ROUNDING.md: converted amounts round half to even (82.5 cents -> 82).
test("EUR conversion rounds half to even per docs/ROUNDING.md", () => {
  assert.equal(toBase(75, "EUR"), 82); // 0.75 EUR * 1.10 = 82.5 cents -> 82
  assert.equal(toBase(85, "EUR"), 94); // 93.5 cents -> 94 (even)
});
