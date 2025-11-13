// what would be the output of trhe following code snippet
let x = 0;
function increment() {
  let x = 0; //1 2
  x++;
  return function () {
    x++;
    console.log(x);
  };
}
const inc = increment();
inc();
inc();

function a() {
  return function b() {
    return function c() {
      return "hello world";
    };
  };
}

// function a() {
//   let A = 'hello';
//   return function b() {
//       let B = 'world';
//       return function c() {
//           let C = 'from Vivek'
//           return `${A} ${B} ${C}`
//       }
//   }
// }

// a()()();
// console.log(a()()())

function a(A) {
  return function b(B) {
    return function c(C) {
      return `${A} ${B} ${C}`;
    };
  };
}

console.log(a("hello")("world")("from Vivek"));
