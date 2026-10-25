import { test } from "node:test";
import assert from "node:assert/strict";
import { toBase } from "../src/fx.js";

test("same amount in different currencies is not cross-cached", () => {
  assert.equal(toBase(5000, "EUR"), 5500);
  assert.equal(toBase(5000, "GBP"), 6250);
});
