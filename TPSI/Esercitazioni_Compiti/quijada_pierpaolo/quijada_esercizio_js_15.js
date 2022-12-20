function controllo(array, N){
    return array.filter((value) => value != N); 
}

let array = [2,2,2];
let N = 2;
console.log(controllo(array, N));