let array = [73, 74, 75, 71, 69, 72, 76, 73];
let n = 8;

function dail(arr, n) {
  let stack = [];
  let ans = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length != 0 && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans.push(0);
    } else {
      ans.push(stack[stack.length - 1] - i);
    }
    stack.push(i);
  }
  console.log(ans.reverse().join(" "));
}
dail(array, n);
// 1 1 4 2 1 1 0 0
