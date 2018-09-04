import calculateSalary from "../src/test-4";

const employees = [
  {
    name: "test",
    salary: 1000
  },
  {
    name: "test 2",
    salary: 2000
  },
  {
    name: "test 3",
    salary: 1500
  },
  {
    name: "test 4",
    salary: 1000
  },
  {
    name: "test 5",
    salary: 2000
  }
];

describe("test calculateSalary", () => {
  it("test calculateSalary invalid param", () => {
    const result = calculateSalary();
    expect("Invalid param").toBe(result);
  });

  it("test calculateSalary 01", () => {
    const result = calculateSalary(employees);
    console.log("result for question 4:");
    console.log(result);
    expect({ higherSalary: 2000, lowerSalary: 1000, average: 1500 }).toEqual(
      result
    );
  });

  it("test calculateSalary 02", () => {
    const result = calculateSalary([employees[3], employees[0]]);
    expect({ higherSalary: 1000, lowerSalary: 1000, average: 1000 }).toEqual(
      result
    );
  });
});
