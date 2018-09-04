import calculateNumbers from "./test-3";

const calculateSalary = employees => {
  if (employees && employees.length > 0) {
    const salary = employees.map(employee => employee.salary);
    const result = calculateNumbers(salary);
    return {
      higherSalary: result.max,
      lowerSalary: result.min,
      average: result.average
    };
  }
  return "Invalid param";
};

export default calculateSalary;
