// const multiDimensionalArray = [
//   [1, 2, 3],
//   [[4, 5], 6],
//   [[7, 8], 9],
// ];
const multiDimensionalArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// const flattenedArray = multiDimensionalArray.reduce((acc, currval) => {
//   return acc.concat(currval);
// }, []);

function flattenedArray(arr) {
  return arr.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenedArray(val)) : acc.concat(val),
    [],
  );
}

console.log(flattenedArray(multiDimensionalArray));
