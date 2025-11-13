function searchInMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;

  for (let row = 0; row < rows; row++) {
    let left = 0;
    let right = cols - 1;

    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (matrix[row][mid] === target) {
        return true;
      } else if (matrix[row][mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return false;
}

// Example usage
let matrix = [
  [1, 3, 5],
  [7, 9, 11],
  [13, 15, 17],
];
let target = 9;
console.log(searchInMatrix(matrix, target)); // Output: true
