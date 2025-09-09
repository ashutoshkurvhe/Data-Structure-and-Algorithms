let n = 4;
//Upper Part
for (let i = 1; i <= n; i++){
    let row = "";
    for (let j = n; j >= i; j--){
        row += " "
    }

    for (let j = 1; j <= i; j++){
        row += "*"
    }

    for (let j = i - 1; j >= 1; j--){
        row += "*"
    }


    console.log(row)
}

//Lower Part
for (let i = n; i >= 1; i--){
    let row = "";
    for (let j = n; j >= i; j--){
        row += " "
    }

    for (let j = 1; j <= i; j++){
        row += "*"
    }

    for (let j = i - 1; j >= 1; j--){
        row += "*"
    }


    console.log(row)
}