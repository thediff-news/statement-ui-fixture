# Data model (mock)

Each ledger entry: `{ id, customer, type, amountCents, currency }`.

- `type` is `charge` or `refund`.
- Amounts are integers in minor units (cents) of the entry's own `currency`.
- **Refunds are stored NEGATIVE** (for example `-1000` EUR is a 10.00 EUR refund).
- Statement `net` = sum of every entry converted to USD cents.
- **Invariant:** a refund must never increase the net. Converting a currency
  must preserve the sign of the amount.
