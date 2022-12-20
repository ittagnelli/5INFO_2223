function prod(x){
    return x.reduce((acc, curr)=> acc* curr**2);
}

let arr = [1, 3 , 5 , 7];

console.log(prod(arr));