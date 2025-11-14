// duplicate remove
function rd(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (res.indexOf(str[i]) === -1) {
      res += str[i];
    }
  }
  return res;
}

let ans = rd("jjasaaad");
console.log(ans);
