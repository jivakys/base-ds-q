// - Assign random numbers to the name given in the array.
//     Example:
//     Array = [Anannya,suman,shreya],
//     Output = [Anannya012,suman321,shreya453]

function assignRandomNumbersToNames(names) {
  const output = names.map((name) => name + Math.floor(Math.random() * 1000));
  return output;
}

const names = ["Anannya", "suman", "shreya"];
const output = assignRandomNumbersToNames(names);

console.log(output);
