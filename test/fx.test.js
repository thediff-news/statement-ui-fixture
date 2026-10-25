import { test } from "node:test";
import assert from "node:assert/strict";
import { toBase } from "../src/fx.js";

test("EUR conversion rounds half to even (docs/ROUNDING.md)", () => {
  assert.equal(toBase(75, "EUR"), 82); // 82.5 -> 82
  assert.equal(toBase(-75, "EUR"), -82); // sign preserved
});

test("GBP 50.00 converts to 62.50 at 1.25", () => {
  assert.equal(toBase(5000, "GBP"), 6250);
});
