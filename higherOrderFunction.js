const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * FILTER
 */
const evenNum = numbers.filter((num) => num % 2 === 0);
// console.log(evenNum);

/**
 * MAP
 */
const doubleNum = numbers.map((n) => n * 2);
// console.log(doubleNum);

/**
 * REDUCE
 */
const sumOfArray = numbers.reduce((acc, sum) => acc + sum, 0);
// console.log(sumOfArray);

/**
 * CHAIN MULTIPLE HOF METHOD
 */
const chainMethod = numbers
  .map((num) => num * 3)
  .filter((num) => num % 2 === 0)
  .reduce((acc, num) => acc + num, 0);
// console.log(chainMethod);

/**
 * .some() returns true if at least one element passes the condition.
 */

const divisibleBy6 = numbers.some((num) => num % 6 === 0);
console.log(divisibleBy6);
