function prodotto_quadrati(arr){
    let prodotto = arr.reduce((acc, current) => acc * Math.pow(current, 2), 1)
    return prodotto
}

console.log(prodotto_quadrati([2,4]))