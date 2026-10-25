import { statement } from "/src/ledger.js";
import { formatMoney } from "/src/money.js";

const entries = await (await fetch("/data/entries.json")).json();
const out = document.getElementById("result");

document.getElementById("go").addEventListener("click", () => {
  const name = document.getElementById("customer").value;
  const s = statement(entries, name);
  if (!s.rows.length) { out.textContent = `No entries for "${name}".`; return; }
  const rows = s.rows.map((r) => `<tr><td>${r.id}</td><td>${r.type}</td><td>${r.amountCents / 100} ${r.currency}</td><td>${formatMoney(r.baseCents)}</td></tr>`).join("");
  out.innerHTML = `<table><tr><th>Entry</th><th>Type</th><th>Original</th><th>USD</th></tr>${rows}</table>
    <div>Charges: ${formatMoney(s.charges)}</div><div>Refunds: ${formatMoney(s.refunds)}</div><div id="net">Net: ${formatMoney(s.net)}</div>`;
});
