function alooPakoda() {
  console.log("le lo");
}
process.nextTick(() => {
  console.log("process next tick");
});
console.log("check 1");
alooPakoda();

setTimeout(() => {
  console.log("Time out ");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
}, 1000);
console.log("check 2");
