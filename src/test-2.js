const orderNumbers = numbers => {
  if (numbers && numbers.length > 0) {
    return [...new Set(numbers)].sort((num1, num2) => num2 - num1);
  }
  return "Invalid param";
};

export default orderNumbers;
