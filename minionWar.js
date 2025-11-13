// DUPLICATE ENCOUNTER ||
// WAR OF MINION

let str = "aabbc";
let stack = []; //
function encounter(str) {
  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] == str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  if (stack.length == 0) {
    console.log("empty");
  } else {
    console.log(stack.join(""));
  }
}
encounter(str);

function removeDuplicate(arr) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // console.log(arr);
  return i + 1;
}

const nums = [1, 1, 2, 2, 3, 4, 4];
// console.log("1", removeDuplicate(nums));
let newLength = removeDuplicate(nums);
console.log(nums.slice(0, newLength));
