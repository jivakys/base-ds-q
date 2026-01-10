// function isBalanced(s) {
//   let st = [];

//   for (let c of s) {
//     if (c === "(" || c === "{" || c === "[") {
//       st.push(c);
//     } else if (c === ")" || c === "}" || c === "]") {
//       if (st.length === 0) return false;
//       let top = st[st.length - 1];
//       if (
//         (c === ")" && top !== "(") ||
//         (c === "}" && top !== "{") ||
//         (c === "]" && top !== "[")
//       ) {
//         return false;
//       }
//       st.pop();
//     }
//   }
//   return st.length === 0;
// }

function isBalanced(s) {
  let obj = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
      stack.push(s[i]);
    } else {
      if (stack.length == 0) {
        return false;
      } else if (stack[stack.length - 1] != obj[s[i]]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length == 0;
}

let s = "[()()]{}";
let st = "[()()]{(})";
console.log(isBalanced(st) ? "true" : "false");
