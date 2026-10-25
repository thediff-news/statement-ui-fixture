import { test } from "node:test";
import assert from "node:assert/strict";
import { divRoundHalfEven, formatMoney } from "../src/money.js";

test("half to even", () => {
  assert.equal(divRoundHalfEven(825, 10), 82);
  assert.equal(divRoundHalfEven(835, 10), 84);
  assert.equal(divRoundHalfEven(-825, 10), -82);
});
test("formatMoney", () => { assert.equal(formatMoney(14320), "$143.20"); assert.equal(formatMoney(-5), "-$0.05"); });
