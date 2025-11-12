function missingIntegers(arr, n) {
  let currentsum = (n * (n + 1)) / 2;
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return currentsum - sum;
}

let arr = [1, 2, 3, 4, 5, 7, 8];
let n = arr.length + 1;
console.log(missingIntegers(arr, n));

// FIND MULTIPLE MISSING ELEMENT IN ARR
function multipleMissElement(arr, n) {
  let set = new Set(arr);
  let missing = [];
  for (let i = 1; i <= m; i++) {
    if (!set.has(i)) {
      missing.push(i);
    }
  }
  return missing;
}

let arr2 = [1, 2, 4, 6, 7, 9, 10];
let m = 11;
console.log(multipleMissElement(arr2, m));
