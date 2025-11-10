// const a = [12, 35, 1, 10, 36];
const a = [5, 2, 10, 8, 3];

/*
## Solution 1 ##
*/
function secLarge(a) {
  let largest = a[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < a.length; i++) {
    if (a[i] > largest) {
      secondLargest = largest;
      largest = a[i];
    } else if (a[i] < largest && a[i] > secondLargest) {
      secondLargest = a[i];
    }
  }
  return secondLargest;
}

/*
## Solution 2 ##
*/
let secondLargeArr = [...new Set(a)].sort((a, b) => a - b);
console.log(secondLargeArr[secondLargeArr.length - 2]);

// console.log(secLarge(a));
