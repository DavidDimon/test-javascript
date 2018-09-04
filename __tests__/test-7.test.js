import calculateSales from "../src/test-7";

const sales = [
  [10, 10, 10, 10, 10],
  [20, 10, 20, 10, 20],
  [50, 50, 50, 50, 50]
];

describe("test calculateSales", () => {
  it("test calculateSales invalid param", () => {
    const result = calculateSales();
    expect("Invalid param").toBe(result);
  });

  it("test calculateSales 01", () => {
    const result = calculateSales(sales);
    expect({
      companyBillingDay: 76,
      companyBillingWeek: 380,
      salesByVendor: [
        { index: 0, salesPerWeek: 50 },
        { index: 1, salesPerWeek: 80 },
        { index: 2, salesPerWeek: 250 }
      ],
      vendorMostValuable: { index: 2, salesPerWeek: 250 }
    }).toEqual(result);
  });
});
