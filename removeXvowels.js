function removeXvowels(input) {
  const xvowels = "aeimoxy";
  let result = "";
  for (let i = 0; i < input.length; i++) {
    const currentChar = input[i];
    if (xvowels.includes(currentChar)) {
      let consecutiveXvowels = currentChar;
      if (xvowels.includes(input[i + 1])) {
        while (i + 1 < input.length && xvowels.includes(input[i + 1])) {
          consecutiveXvowels += input[i + 1];
          i++;
        }
      } else {
        result += consecutiveXvowels[0];
      }
    } else {
      result += currentChar;
    }
  }
  return result;
}
const inputText = "testing the curious function";
const resultText = removeXvowels(inputText);

console.log(resultText);
