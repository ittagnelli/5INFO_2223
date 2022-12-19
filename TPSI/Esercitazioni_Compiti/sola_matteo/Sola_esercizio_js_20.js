function new_vector(array, N) {
    if(N >= array.length) return console.log("Indice fuori portata");
    
    return array.slice(array.length - N);
}

let numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(new_vector(numeri, 5));