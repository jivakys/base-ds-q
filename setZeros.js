function runProgram(input) {
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let mat = [];
    for (let j = 0; j < n; j++) {
      mat.push(input[line++].trim().split(" ").map(Number));
    }
    setZero(n, m, mat);
  }
}

function setZero(n, m, mat) {
  // console.log(mat)
  let col = 1;

  for (let i = 0; i < n; i++) {
    if (mat[i][0] === 0) {
      col = 0;
    }
    for (let j = 1; j < m; j++) {
      if (mat[i][j] === 0) {
        mat[i][0] = mat[0][j] = 0;
      }
    }
  }
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 1; j--) {
      if (mat[i][0] == 0 || mat[0][j] == 0) {
        mat[i][j] = 0;
      }
      if (col == 0) {
        mat[i][0] = 0;
      }
    }
  }

  for (let k = 0; k < n; k++) {
    let res = "";
    for (let a = 0; a < m; a++) {
      res += mat[k][a] + " ";
    }
    console.log(res);
  }
}
