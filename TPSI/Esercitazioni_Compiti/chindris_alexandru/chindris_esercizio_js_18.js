// prodotto dei quadrati 
function prod(x){
    return x.reduce((acc, curr)=> acc* curr**2);
}

let arr = [1,2,3,4];

console.log(prod(arr));