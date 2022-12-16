function firstN(array, N){
    
    return array.splice(0,N);
}

console.log(firstN([1,2,3,4,5,6,7],3));