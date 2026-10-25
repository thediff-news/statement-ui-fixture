# statement-ui fixture (CONTROLLED TEST, MOCK DATA)

This repo is a small, **fake** customer-statement viewer used to test an
automated bug-report-to-PR workflow. All customers, amounts and rates are
invented. It contains no real billing data and no private documents.

- `src/` money, FX and ledger logic
- `web/` a tiny static page (type a customer, click "Show statement")
- `docs/` data model and rounding policy
- `test/` unit tests (`npm test`)
