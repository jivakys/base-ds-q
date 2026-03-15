function alooPakoda() {
  console.log("le lo");
}
process.nextTick(() => {
  console.log("process next tick");
});
alooPakoda();
console.log("check 1");

setTimeout(() => {
  console.log("Time out ");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
}, 1000);
console.log("check 2");
