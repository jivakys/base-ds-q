function findFrequentEle(arr) {
  let obj = {};
  let maxCount = 0;
  let frequentEle = 0;

  for (let char of arr) {
    obj[char] = (obj[char] || 0) + 1;

    // if (obj[char] == undefined) {
    //   obj[char] = 1;
    // } else {
    //   obj[char]++;
    // }

    if (obj[char] > maxCount) {
      maxCount = obj[char];
      frequentEle = char;
    }
  }
  console.log("count = ", maxCount);
  console.log("element = ", frequentEle);
}

let arr = [1, 3, 2, 1, 4, 2, 2];
findFrequentEle(arr);
