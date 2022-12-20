function square_product(array){
    return array.reduce((acc, currVal) => acc * Math.pow(currVal, 2), 1);
}

let N = [1, 2];

console.log(square_product(N));


