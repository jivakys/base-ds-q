const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob", age: 17, email: "bob@example.com" },
  { name: "Carol", age: 30, email: "carol@example.com" },
  { name: "Dave", age: 22, email: "dave@example.com" },
  { name: "Eve", age: 19, email: "eve@example.com" },
];

// filter users by the age greater than 18.
const ageGreaterThan18 = users.filter((p) => p["age"] > 18);
// console.log(ageGreaterThan18);

// Sort users by the age property in ascending order.
const sortUsers = users.sort((a, b) => a["age"] - b["age"]);
// console.log(sortUsers);

// Create a new array containing only the name values of all users.
const newArr = users.map((person) => person.name);
// console.log(newArr);

// Check if there exists any user with the email "dave@example.com".
const checkEmail = users.some((p) => p.email === "dave1@example.com");
// console.log(checkEmail);

// Calculate the average age of all users.
const totalAgeSum = users.reduce((acc, user) => acc + user.age, 0);
const avgAge = totalAgeSum / users.length;
// console.log(avgAge);

// Group users by age group, under 21, above 25, in between.
// (can be dynamic as well, for example group users by city(where no of cities can be dynamic))
const groupedByAge = users.reduce((groups, user) => {
  let group;

  if (user.age < 21) group = "under21";
  else if (user.age > 25) group = "above25";
  else group = "between21and25";

  if (!groups[group]) groups[group] = [];
  groups[group].push(user);
  return groups;
}, {});

console.log(groupedByAge);
