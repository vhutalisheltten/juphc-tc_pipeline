"use strict";

const form = document.getElementById("tax-form");
const income = document.getElementById("income");
const result = document.getElementById("result");
const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const summary = TaxCalculator.calculateSummary(income.value);
    result.innerHTML =
      `<strong>Estimated tax:</strong> ${money.format(summary.tax)}<br>` +
      `<strong>After-tax income:</strong> ${money.format(summary.afterTaxIncome)}<br>` +
      `<strong>Effective rate:</strong> ${summary.effectiveRate.toFixed(2)}%`;
  } catch (error) {
    result.textContent = error.message;
  }
});
