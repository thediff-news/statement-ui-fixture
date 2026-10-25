import { test } from "node:test";
import assert from "node:assert/strict";
import { statement } from "../src/ledger.js";

const entries = [
  { id: "1", customer: "T", type: "charge", amountCents: 10000, currency: "USD" },
  { id: "2", customer: "T", type: "refund", amountCents: -2500, currency: "USD" },
];

test("USD charge and refund net", () => {
  assert.equal(statement(entries, "T").net, 7500);
});

test("EUR charge converts at 1.10", () => {
  const s = statement([{ id: "3", customer: "T", type: "charge", amountCents: 5000, currency: "EUR" }], "T");
  assert.equal(s.net, 5500);
});
