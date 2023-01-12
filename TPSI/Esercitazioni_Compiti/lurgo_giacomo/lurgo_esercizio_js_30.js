function Filtro(array, N, M){
    return array.filter(item => item >= N && item <= M)
}

console.log(Filtro([1,2,3,4,5,6,7,8,9,10],1,6))