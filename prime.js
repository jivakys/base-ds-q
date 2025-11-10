function findPrimeNum(num) {
  if (num == undefined || num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function printPrimeEle(n) {
  for (let i = 1; i <= n; i++) {
    if (findPrimeNum(i)) {
      console.log(i);
    }
  }
}

printPrimeEle(100);
