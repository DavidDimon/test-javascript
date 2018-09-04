const calculateMatrix = matrix => {
  if (matrix && matrix.length > 0) {
    let totalValue = 0;
    const totalLine4 = matrix[3].map(item => item).reduce((a, b) => a + b, 0);
    let totalColumn2 = 0;
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < matrix.length; i += 1) {
      const totalLine = matrix[i].map(item => item).reduce((a, b) => a + b, 0);
      totalColumn2 += matrix[i][1];
      totalValue += totalLine;
      mainDiagonal += matrix[i][i];
      secondaryDiagonal += matrix[i][matrix.length - 1 - i];
    }

    return {
      totalLine4,
      totalColumn2,
      mainDiagonal,
      secondaryDiagonal,
      totalMatrix: totalValue
    };
  }
  return "Invalid param";
};

export default calculateMatrix;
