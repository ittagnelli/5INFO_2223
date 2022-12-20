function decimale(binario){
    let array = binario.split("");
    return array.reverse().reduce((acc, curr, i) => acc = acc + curr * (2**i), 0)
}

let binario = "0101"
console.log(decimale(binario));