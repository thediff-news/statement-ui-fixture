# Rounding policy (mock)

Converted amounts are rounded to whole USD cents **half to even** (banker's
rounding): 82.5 cents becomes 82, 83.5 cents becomes 84.

This is intentional and was decided in issue #1 ("Totals look off by a cent").
It removes the systematic upward bias of half-up rounding across many entries.
Changing it needs a new decision, not a bug fix.
