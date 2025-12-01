// Given a list of a number k, return any two numbers from the list and add up give [10, 15, 3, 7]
// and k of 17, return true since 10 + 7 is 17;

//### Solution - 1 - nested loop

//### solution - 2 - using sort() and two pointer
// function findSum(arr, k) {
//   arr.sort((a, b) => a - b);
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] + arr[right] == k) {
//       return true;
//     } else if (arr[left] + arr[right] > k) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return false;
// }
