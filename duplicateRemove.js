const numbers = [1, 2, 3, 4, 5, 1, 2, 3];

/*
## Solution 1 ##
*/
function removeDuplicateNum(numbers) {
  let obj = {};
  let newArr = [];
  for (let char of numbers) {
    if (!obj[char]) {
      obj[char] = true;
      newArr.push(char);
    }
  }
  return newArr;
}
// console.log(removeDuplicateNum(numbers));

/*
## Solution 2 ##
*/
let uniquenumbers = new Set(numbers);
let arrayFromSet = Array.from(uniquenumbers);
// console.log(arrayFromSet);

/*
## Solution 3 ##
*/
console.log([...new Set(numbers)]);

/*
## Solution 4 ##
*/
const mapFromNumbers = new Map(numbers.map((num, index) => [num, index]));
const arrayFromSpread = [...mapFromNumbers];
console.log(arrayFromSpread);
