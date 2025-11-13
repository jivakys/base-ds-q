function checkPalindrome1(str) {
  /* #### FOR STRING USE THIS METHOD ### */
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return "Not a Palindrome";
    }
    i++, j--;
  }
  return "Palindrome";
}

let str = "racecar";
console.log(checkPalindrome1(str));

// FOR NUMBER USE THIS METHOD 121
function checkPalindrome2(num) {
  let reverse = 0;
  let temp = num;
  while (num > 0) {
    rem = num % 10;
    reverse = reverse * 10 + rem;
    num = Math.floor(num / 10);
  }

  if (temp == reverse) {
    return "Palindrome";
  } else {
    return "Not a Palindrome";
  }
}
console.log(checkPalindrome2(1221));

// APPROCH 3;
function checkPalindrome3(s) {
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i].toLowerCase();
    if ((char >= "a" && char <= "z") || (char >= "0" && char <= "9")) {
      str += char;
    }
  }
  let l = 0;
  let r = str.length - 1;
  while (l < r) {
    if (str[l] != str[r]) {
      return false;
    } else {
      l++;
      r--;
    }
  }
  return true;
}
let s = "A man, a plan, a canal: Panama";
// let s = "race a car"
console.log(checkPalindrome3(s));
