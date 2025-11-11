function findLongestStr(str) {
  let arr = str.split(" ");
  let max = -Infinity;
  let n = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      n = arr[i];
    }
  }
  console.log("longest string is = ", n);
  console.log("Longest string length is = ", max);
}

let str = "hi i am a javascript toooooooooooo";
console.log(findLongestStr(str));
