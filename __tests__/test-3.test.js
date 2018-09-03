import validateNumbers from "../src/test-3";

describe("test validateNumbers", () => {
  it("test validateNumbers invalid param", () => {
    const result = validateNumbers();
    expect("Invalid param").toBe(result);
  });

  it("test validateNumbers 01", () => {
    const result = validateNumbers([1, 2, 4, 3]);
    expect({ max: 4, min: 1, media: 2.5 }).toEqual(result);
  });

  it("test validateNumbers 02", () => {
    const result = validateNumbers([3, 2, 5, 2, 3]);
    expect({ max: 5, min: 2, media: 3 }).toEqual(result);
  });

  it("test validateNumbers with 500 numbers", () => {
    const numbers = Array.from(Array(500).keys());
    const result = validateNumbers(numbers);
    expect({ max: 499, min: 0, media: 249.5 }).toEqual(result);
  });
});
