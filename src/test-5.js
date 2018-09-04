const extractDataFromPeoples = peoples => {
  if (peoples && peoples.length > 0) {
    const ages = peoples.map(people => people.age);
    const average = Math.max.apply(Math, ages);
    const countWomen = peoples.filter(
      people =>
        people.age > 18 &&
        people.age < 35 &&
        people.gender.toLowerCase() === "f"
    ).length;

    const countBlonde = peoples.filter(
      people =>
        people.eyeColor.toLowerCase() === "green" &&
        people.hairColor.toLowerCase() === "yellow"
    ).length;
    return {
      averageAge: average,
      countWomen,
      countBlondeEyeGreen: countBlonde
    };
  }
  return "Invalid param";
};

export default extractDataFromPeoples;
