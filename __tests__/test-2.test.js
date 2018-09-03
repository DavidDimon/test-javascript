import sortNumbers from "../src/test-2";

describe("test sortNumbers", () => {
  it("test sortNumbers invalid param", () => {
    const result = sortNumbers();
    expect("Invalid param").toBe(result);
  });

  it("test sortNumbers params", () => {
    const result = sortNumbers([1, 2, 4, 3]);
    expect([4, 3, 2, 1]).toEqual(result);
  });

  it("test sortNumbers index 12", () => {
    const result = sortNumbers([3, 2, 5, 2, 3]);
    expect([5, 3, 2]).toEqual(result);
  });
});
