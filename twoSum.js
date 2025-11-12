// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target

function two_sum(arr, target) {
  let newMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    let rem = target - arr[i];
    if (newMap.has(rem)) {
      return [newMap.get(rem), i];
    }

    newMap.set(arr[i], i);
  }
}

console.log(two_sum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(two_sum([3, 2, 4], 6)); // Output: [1, 2]
// print(two_sum([3,3], 6))        // Output: [0, 1]
