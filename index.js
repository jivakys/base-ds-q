function isBalanced(s) {
  let st = [];

  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      st.push(c);
    }

    // Process closing brackets
    else if (c === ")" || c === "}" || c === "]") {
      // No opening bracket
      if (st.length === 0) return false;
      let top = st[st.length - 1];
      if (
        (c === ")" && top !== "(") ||
        (c === "}" && top !== "{") ||
        (c === "]" && top !== "[")
      ) {
        return false;
      }

      // Pop matching opening bracket
      st.pop();
    }
  }

  // Balanced if stack is empty
  return st.length === 0;
}

//Driven Code
let s = "[()()]{}";
console.log(isBalanced(s) ? "true" : "false");
