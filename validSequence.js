// Valid Stack Sequence
n = 5;
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 3, 2, 1];
// 5
// 1 2 3 4 5
// 4 3 5 1 2

function validSequence(n, arr1, arr2) {
  let count = 0;
  let stack = [];
  for (let i = 0; i < n; i++) {
    stack.push(arr1[i]);
    while (
      stack.length != 0 &&
      count < n &&
      stack[stack.length - 1] == arr2[count]
    ) {
      stack.pop();
      count++;
    }
  }
  if (stack.length === 0) {
    console.log("Valid");
  } else {
    console.log("Invalid");
  }
}
