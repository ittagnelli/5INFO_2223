function firstN(array, N){ 
    return array.splice(-N);
}

console.log(firstN([1,2,3,4,5,6,7],3));