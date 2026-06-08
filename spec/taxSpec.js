"use strict";

const { calculateTax, calculateSummary } = require("../taxCalculator");

describe("Tax Calculator", () => {
  it("returns zero tax for zero income", () => {
    expect(calculateTax(0)).toBe(0);
  });

  it("calculates tax in the first bracket", () => {
    expect(calculateTax(10000)).toBe(1000);
  });

  it("calculates tax across progressive brackets", () => {
    expect(calculateTax(75000)).toBe(11553);
  });

  it("calculates a complete summary", () => {
    expect(calculateSummary(75000)).toEqual({
      income: 75000,
      tax: 11553,
      afterTaxIncome: 63447,
      effectiveRate: 15.4
    });
  });

  it("rejects negative and non-numeric income", () => {
    expect(() => calculateTax(-1)).toThrowError(TypeError);
    expect(() => calculateTax("invalid")).toThrowError(TypeError);
  });

  it("calculates tax at the first bracket boundary", () => {
    expect(calculateTax(11600)).toBe(1160);
  });

  it("accepts numeric income supplied as a string", () => {
    expect(calculateTax("10000")).toBe(1000);
  });
});
