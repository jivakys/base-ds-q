function tall_around(L, K, A) {
  let result = [];

  for (let i = 0; i <= L - K; i++) {
    let max = A[i];
    for (let j = i + 1; j < i + K; j++) {
      if (A[j] > max) max = A[j];
    }
    result.push(max);
  }

  console.log(result.join(" "));
}

let L = 9,
  K = 3;
let A = [1, 2, 3, 1, 4, 5, 2, 3, 6];
tall_around(L, K, A);
