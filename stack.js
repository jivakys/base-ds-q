let arr = [];
let top = -1;
let size = 5;

function push(data) {
  if (top == size - 1) {
    console.log("overflow");
    return arr;
  }
  top++;
  arr[top] = data;
}

function pop() {
  if (top == -1) {
    console.log("Empty Stack");
  }
  let ans = arr[top];
  top--;
  return ans;
}

function peek() {
  if (top == -1) {
    ("Empty Stack");
  }
  return arr[top];
}

push(45);
push(2);
push(52);
push(10);
pop();
push(68);
console.log(arr);
console.log(peek());
