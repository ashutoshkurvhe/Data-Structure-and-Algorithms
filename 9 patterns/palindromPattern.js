let n = 5;
for (let i = 1; i <= 5; i++){
    let row = "";
    for (let j = 1; j <= n - i; j++){
        row += " ";
    }

    for (let j = i; j >= 1; j--){
        row += j
    }

    for (let j = 2; j <= i; j++) {
        row += j
    }
    console.log(row)
}