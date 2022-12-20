function potenza(array){
    return array.reduce((acc, current) => acc * Math.pow(current, 2), 1);
}

let array=[2, 0];
console.log(potenza(array));