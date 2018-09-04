import extractDataFromPeoples from "../src/test-5";

const peoples = [
  {
    age: 19,
    hairColor: "yellow",
    eyeColor: "green",
    gender: "f"
  },
  {
    age: 36,
    hairColor: "yellow",
    eyeColor: "green",
    gender: "M"
  },
  {
    age: 17,
    hairColor: "yellow",
    eyeColor: "green",
    gender: "f"
  },
  {
    age: 19,
    hairColor: "black",
    eyeColor: "green",
    gender: "f"
  },
  {
    age: 27,
    hairColor: "yellow",
    eyeColor: "black",
    gender: "f"
  },
  {
    age: 19,
    hairColor: "black",
    eyeColor: "black",
    gender: "F"
  }
];

describe("test extractDataFromPeoples", () => {
  it("test extractDataFromPeoples invalid param", () => {
    const result = extractDataFromPeoples();
    expect("Invalid param").toBe(result);
  });

  it("test extractDataFromPeoples 01", () => {
    const result = extractDataFromPeoples(peoples);
    expect({
      averageAge: 36,
      countWomen: 4,
      countBlondeEyeGreen: 3
    }).toEqual(result);
  });

  it("test extractDataFromPeoples 02", () => {
    const result = extractDataFromPeoples([peoples[3], peoples[0]]);
    expect({
      averageAge: 19,
      countWomen: 2,
      countBlondeEyeGreen: 1
    }).toEqual(result);
  });
});
