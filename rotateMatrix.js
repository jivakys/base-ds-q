function rotateMatrix(matrix) {
  // Transpose the matrix
  for (var i = 0; i < matrix.length; i++) {
    for (var j = i + 1; j < matrix.length; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Reverse each row of the transposed matrix
  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse();
  }

  return matrix;
}

// Example usage
var inputMatrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var result = rotateMatrix(inputMatrix);
console.log(result);
// Output:
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]
