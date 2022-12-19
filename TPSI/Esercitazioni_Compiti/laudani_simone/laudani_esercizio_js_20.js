function func(array, N){ 
    return array.splice(-N);
}
console.log(func([1,2,3,4,5],3));