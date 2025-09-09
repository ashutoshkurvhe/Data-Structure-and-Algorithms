let num = 5;
for (let i = 1; i <= num; i++) {
  let row = "";
  for (let j = 1; j <= num; j++) {
    if (i === 1 || i === num || j === 1 || j === num) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}

// i = 1 j = 1 to j = 5 -> *
// i = 2 j = 1 to j = 5 -> *
// i = 3 j = 1 to j = 5 -> *
// i = 4 j = 1 to j = 5 -> *
// i = 5 j = 1 to j = 5 -> *