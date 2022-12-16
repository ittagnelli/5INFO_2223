function Filter(array, N){
    return array.filter(item => item != N);
}


console.log(Filter([1,2,3,4,3,5,8], 3))