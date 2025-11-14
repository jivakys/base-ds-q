function reverseFunc(str) {
  let words = [];
  let word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    } else {
      words.push(word);
      word = "";
    }
  }
  words.push(word); // Add the last word

  let reversedSentence = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i];
    if (i !== 0) {
      reversedSentence += " ";
    }
  }

  return reversedSentence;
}

let input = "This is a good day";
console.log(reverseFunc(input));
