let n = 5;
for (let i = 1; i <= n; i++){
    let row = "";
    for (let j = 5; j >= i ; j--){
        row += " ";
    }

    for (let j = 1; j <= 5; j++){
        row += "*";
    }
    console.log(row)
}