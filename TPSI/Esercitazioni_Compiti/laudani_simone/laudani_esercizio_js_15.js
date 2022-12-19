function filtro(array, N){
    return array.filtro(item => item != N);
}
console.log(filtro([1,2,3,4], 3))