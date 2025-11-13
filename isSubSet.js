function isSubset(arr1, arr2) {
  let newSet = new Set(arr1);

  for (let ele of arr1) {
    if (!newSet.has(ele)) {
      return false;
    }
  }
  return true;
}
const a = "testm";
const b = "This is a test string";

// console.log(isSubset([1, 2, 3, 4, 5], [2, 3])); // true
// console.log(isSubset([1, 2, 3, 4, 5], [2, 6])); // false
console.log(isSubset(a, b));
