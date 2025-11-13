function isSubstringManual(a, b) {
  for (let index = 0; index < b.length; index++) {
    return b.includes(a);
  }
}

// function isSubstringManual(a, b) {
//   for (let i = 0; i <= b.length - a.length; i++) {
//       let match = true;
//       for (let j = 0; j < a.length; j++) {
//           if (b[i + j] !== a[j]) {
//               match = false;
//               break;
//           }
//       }
//       if (match) return true;
//   }
//   return false;
// }

// Sample Input
const a = "string";
const b = "This is a test string";

console.log(isSubstringManual(a, b)); // Output: true
