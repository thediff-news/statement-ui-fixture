/** Divide an integer numerator by an integer denominator, rounding half to even
 * (banker's rounding). This is the documented policy: see docs/ROUNDING.md. */
export function divRoundHalfEven(num, den) {
  const sign = num < 0 ? -1 : 1;
  const n = Math.abs(num);
  const q = Math.floor(n / den);
  const r2 = (n - q * den) * 2;
  let out = q;
  if (r2 > den || (r2 === den && q % 2 === 1)) out = q + 1;
  return sign * out;
}

export function formatMoney(cents) {
  const sign = cents < 0 ? "-" : "";
  const abs = Math.abs(cents);
  return `${sign}$${Math.floor(abs / 100)}.${String(abs % 100).padStart(2, "0")}`;
}
