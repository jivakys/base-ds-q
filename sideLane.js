// let arr = [5, 4, 2, 1, 3];
let arr = [5, 4, 1, 2, 3];
let n = 5;

function side(n, arr) {
  let stack = [];
  let num = 1; // 2 3 4
  for (let i = 0; i < n; i++) {
    //0 1 2 3 4
    if (arr[i] === num) {
      num++;
    } else {
      if (stack.length !== 0 && arr[i] > stack[stack.length - 1]) {
        return false;
      } else {
        stack.push(arr[i]);
      }
    }
  }
  return true;
}

let re = side(n, arr);
if (re) {
  console.log("yes");
} else {
  console.log("no");
}

// input = input.trim().split("\n");
//   let line = 0;
//   for(let i=0; i<input.length; i++){
//       if(input[line] == 0){
//          return true;
//    }
//       let n = +input[line++].trim();
//       let arr = input[line++].trim().split(" ").map(Number);
//       usesideLane(n,arr)?console.log("yes"):console.log("no")
//   }
