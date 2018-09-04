import calculateNumbers from "../src/test-3";

describe("test calculateNumbers", () => {
  it("test calculateNumbers invalid param", () => {
    const result = calculateNumbers();
    expect("Invalid param").toBe(result);
  });

  it("test calculateNumbers 01", () => {
    const result = calculateNumbers([1, 2, 4, 3]);
    expect({ max: 4, min: 1, average: 2.5 }).toEqual(result);
  });

  it("test calculateNumbers 02", () => {
    const result = calculateNumbers([3, 2, 5, 2, 3]);
    expect({ max: 5, min: 2, average: 3 }).toEqual(result);
  });

  it("test calculateNumbers with 500 numbers", () => {
    const numbers = Array.from(Array(500).keys());
    const result = calculateNumbers(numbers);
    console.log("result for question 3:");
    console.log(result);
    expect({ max: 499, min: 0, average: 249.5 }).toEqual(result);
  });
});
