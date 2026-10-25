import { divRoundHalfUp } from "./money.js";

/** USD per 1 unit of the currency, in 1/10000ths (11000 = 1.1000). */
export const RATE_BP = { USD: 10000, EUR: 11000, GBP: 12500 };

/** Convert an amount in minor units of `currency` to USD cents. */
const memo = new Map();
export function toBase(amountCents, currency) {
  const rate = RATE_BP[currency];
  if (!rate) throw new Error(`unknown currency ${currency}`);
  if (currency === "USD") return amountCents;
  const key = `${currency}:${amountCents}`;
  if (memo.has(key)) return memo.get(key);
  const out = divRoundHalfUp(amountCents * rate, 10000);
  memo.set(key, out);
  return out;
}
