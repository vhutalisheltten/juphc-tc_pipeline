(function (root, factory) {
  const api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.TaxCalculator = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  const brackets = [
    { limit: 11600, rate: 0.10 },
    { limit: 47150, rate: 0.12 },
    { limit: 100525, rate: 0.22 },
    { limit: 191950, rate: 0.24 },
    { limit: 243725, rate: 0.32 },
    { limit: 609350, rate: 0.35 },
    { limit: Infinity, rate: 0.37 }
  ];

  function calculateTax(income) {
    const numericIncome = Number(income);
    if (!Number.isFinite(numericIncome) || numericIncome < 0) {
      throw new TypeError("Income must be a non-negative number.");
    }

    let tax = 0;
    let lowerLimit = 0;
    for (const bracket of brackets) {
      const taxableInBracket = Math.min(numericIncome, bracket.limit) - lowerLimit;
      if (taxableInBracket <= 0) break;
      tax += taxableInBracket * bracket.rate;
      lowerLimit = bracket.limit;
    }
    return Math.round(tax * 100) / 100;
  }

  function calculateSummary(income) {
    const numericIncome = Number(income);
    const tax = calculateTax(numericIncome);
    return {
      income: numericIncome,
      tax,
      afterTaxIncome: Math.round((numericIncome - tax) * 100) / 100,
      effectiveRate: numericIncome === 0 ? 0 : Math.round((tax / numericIncome) * 10000) / 100
    };
  }

  return { calculateTax, calculateSummary };
});
