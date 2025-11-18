const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  for (let j = 0; j < colors.length; j++) {
    for (let k = 0; k < colors.length; k++) {
      if (i != j && j != k && i != k) {
        console.log(colors[i], colors[j], colors[k]);
      }
    }
  }
}
