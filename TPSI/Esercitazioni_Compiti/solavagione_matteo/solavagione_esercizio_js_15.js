function verifica(arr, N){
    return arr.filter((value) => value != N)
}

console.log(verifica([1,2,3,4], 3))