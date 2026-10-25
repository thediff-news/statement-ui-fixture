# Data model (mock)

Each ledger entry: `{ id, customer, type, amountCents, currency }`.

- `type` is `charge` or `refund`.
- Amounts are integers in minor units (cents) of the entry's own `currency`.
- **Refunds are stored NEGATIVE** (for example `-1000` EUR is a 10.00 EUR refund).
- Statement `net` = sum of every entry converted to USD cents.
- **Invariant:** a refund must never increase the net. Converting a currency
  must preserve the sign of the amount.

**Rates (mock):** EUR 1.10 USD, GBP 1.25 USD (`src/fx.js` RATE_BP). The rate
table is the source of truth for conversions; if a converted amount looks off,
check the table against the code first.
