import { test } from "node:test";
import assert from "node:assert/strict";
import { toBase } from "../src/fx.js";
import { statement } from "../src/ledger.js";

test("conversion preserves sign (refund never increases net)", () => {
  assert.equal(toBase(-1000, "EUR"), -1100);
});

test("EUR refund reduces net", () => {
  const e = [
    { id: "1", customer: "T", type: "charge", amountCents: 5000, currency: "EUR" },
    { id: "2", customer: "T", type: "refund", amountCents: -1000, currency: "EUR" },
  ];
  assert.equal(statement(e, "T").net, 4400);
});

test("half-even rounding unchanged (docs/ROUNDING.md): 0.75 EUR -> 82 cents", () => {
  assert.equal(toBase(75, "EUR"), 82);
});
