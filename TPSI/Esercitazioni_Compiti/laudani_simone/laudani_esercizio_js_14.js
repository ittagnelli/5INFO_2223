function substitute(array, N, M){
    let copia = [...array]
    let placeholder = (copia.splice(N,1))[0];
    copia.splice(M,0,placeholder);
    return copia;
}
console.log(substitute([10, 20, 30], 0, 2));