function singleNumber(nums) {
  let result = 0;
  for (let num of nums) {
    result ^= num;
    // The bitwise XOR (^) operator returns a number or BigInt whose binary representation has a 1 in each bit position for which the corresponding bits of either but not both operands are 1.
  }
  return result;
}

// Example usage:
const nums = [4, 1, 2, 1, 4];
console.log(singleNumber(nums));
