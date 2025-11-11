// TECH1
function displayNestedObject(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      displayNestedObject(obj[key]);
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

// function displayNestedObject(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "object" && obj[key] !== null) {
//       // If the value is an object (and not null), recursively call the function
//       console.log(`Nested Object: ${key}`);
//       displayNestedObject(obj[key]);
//     } else {
//       // If the value is not an object, display the key and value
//       console.log(`Key: ${key}, Value: ${obj[key]}`);
//     }
//   }
// }

// Example nested object
const nestedObject = {
  key1: "value1",
  key2: {
    key3: "value3",
    key4: {
      key5: "value5",
      key6: "value6",
    },
  },
  key7: "value7",
};

// Call the function with the example object
displayNestedObject(nestedObject);

// STAIR PRINT
// function buildStairs(n) {
//   for (let i = 1; i <= n; i++) {
//       console.log('#'.repeat(i).padStart(n));
//   }
// }

// buildStairs(10)
