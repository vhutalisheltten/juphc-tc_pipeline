"use strict";

const form = document.querySelector("#tax-form");
const incomeInput = document.querySelector("#income");
const result = document.querySelector("#result");
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const summary = TaxCalculator.calculateSummary(incomeInput.value);
    result.innerHTML = `
      <dl>
        <div><dt>Estimated federal tax</dt><dd>${money.format(summary.tax)}</dd></div>
        <div><dt>After-tax income</dt><dd>${money.format(summary.afterTaxIncome)}</dd></div>
        <div><dt>Effective tax rate</dt><dd>${summary.effectiveRate.toFixed(2)}%</dd></div>
      </dl>`;
    result.hidden = false;
  } catch (error) {
    result.textContent = error.message;
    result.hidden = false;
  }
});
