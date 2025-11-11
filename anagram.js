/*
## Solution 1 ##
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let obj = {};
  for (let char of str1) {
    obj[char] = (obj[char] || 0) + 1;
    // if (!obj[char]) obj[char] = 1;
    // obj[char]++;
  }

  for (let char of str2) {
    if (!obj[char]) return false;
    obj[char]--;
  }

  return true;
}

/*
## Solution 2 ##
*/
// function isAnagram(str1, str2) {
//   str1 = str1.split("").sort().join("");
//   str2 = str2.split("").sort().join("");
//   return str1 == str2;
// }

let str1 = "listen";
let str2 = "silent";

console.log(isAnagram(str1, str2));
