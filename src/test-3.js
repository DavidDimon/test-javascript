const validateNumbers = numbers => {
  if (numbers && numbers.length > 0) {
    return {
      max: Math.max.apply(Math, numbers),
      min: Math.min.apply(Math, numbers),
      media: numbers.reduce((a, b) => a + b, 0) / numbers.length
    };
  }
  return "Invalid param";
};

export default validateNumbers;
