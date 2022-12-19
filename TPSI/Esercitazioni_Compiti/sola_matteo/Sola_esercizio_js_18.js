function prod_quad(array){
    return array.reduce((acc, currVal) => acc * Math.pow(currVal, 2), 1);
}

let numeri = [1, 2, 3];

console.log(prod_quad(numeri));