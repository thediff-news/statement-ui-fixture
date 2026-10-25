import { toBase } from "./fx.js";

/** Statement for one customer. Per docs/DATA_MODEL.md refunds are stored with a
 * NEGATIVE amountCents in their original currency. */
export function statement(entries, customer) {
  const rows = entries
    .filter((e) => e.customer.toLowerCase() === customer.trim().toLowerCase())
    .map((e) => ({ ...e, baseCents: toBase(e.amountCents, e.currency) }));
  const charges = rows.filter((r) => r.type === "charge").reduce((s, r) => s + r.baseCents, 0);
  const refunds = rows.filter((r) => r.type === "refund").reduce((s, r) => s + r.baseCents, 0);
  return { rows, charges, refunds, net: charges + refunds };
}
