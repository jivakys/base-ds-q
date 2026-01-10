function isBalanced(s) {
  let st = [];

  for (let c of s) {
    if (c === "(" || c === "{" || c === "[") {
      st.push(c);
    } else if (c === ")" || c === "}" || c === "]") {
      if (st.length === 0) return false;
      let top = st[st.length - 1];
      if (
        (c === ")" && top !== "(") ||
        (c === "}" && top !== "{") ||
        (c === "]" && top !== "[")
      ) {
        return false;
      }
      st.pop();
    }
  }

  return st.length === 0;
}

let s = "[()()]{}";
console.log(isBalanced(s) ? "true" : "false");
