function sortBinaryArray(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] == 0) {
      left++;
    } else if (arr[right] == 1) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  return arr;
}

let binaryArray = [1, 0, 1, 0, 0, 1, 0, 0];
let sortedArray = sortBinaryArray(binaryArray);
console.log(sortedArray); // Output: [0, 0, 0, 0, 1, 1, 1]
// TIME COMPLEXITY = O(N) AND SPACE COMPLEXITY = O(1)
