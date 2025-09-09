let n = 4;
//Upper Part
for (let i = 1; i <= n; i++){
    let row = "";
    for (let j = 1; j <= i; j++){
            row += "*";
    }
    let space = 2 * (n - i);
    for (let j = 1; j <= space; j++){
        row += " ";
    }
    for (let j = 1; j <= i; j++){
            row += "*";
    }
    console.log(row)

}

//lowwer part
for (let i = n; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  let space = 2 * (n - i);
  for (let j = 1; j <= space; j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}