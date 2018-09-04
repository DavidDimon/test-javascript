import calculateMatrix from "../src/test-8";

const matrix = [
  [10, 10, 10, 10, 10],
  [20, 10, 20, 10, 20],
  [50, 50, 50, 50, 50],
  [50, 50, 50, 50, 50],
  [50, 50, 50, 50, 50]
];

describe("test calculateMatrix", () => {
  it("test calculateMatrix invalid param", () => {
    const result = calculateMatrix();
    expect("Invalid param").toBe(result);
  });

  it("test calculateMatrix 01", () => {
    const result = calculateMatrix(matrix);
    console.log("results for question 8:");
    console.log(result);
    expect({
      mainDiagonal: 170,
      secondaryDiagonal: 170,
      totalColumn2: 170,
      totalLine4: 250,
      totalMatrix: 880
    }).toEqual(result);
  });
});
