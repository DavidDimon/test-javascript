import getMonth from "../src/test-1";

describe("test getmonth", () => {
  it("test month invalid month", () => {
    const result = getMonth(0);
    expect("invalid param").toBe(result);
  });

  it("test month index 2", () => {
    const result = getMonth(2);
    expect("February").toBe(result);
  });

  it("test month index 12", () => {
    const result = getMonth(12);
    expect("December").toBe(result);
  });
});
