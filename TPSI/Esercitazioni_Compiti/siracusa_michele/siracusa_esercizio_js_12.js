function compare_vectors(array1, array2){
    return vector1.map((el, idx) => vector2[idx] === el).every(item => item == true);
}

let vector1 = [1, 2, 3, 4, 5];
let vector2 = [1, 2, 3, 4, 5];

console.log(compare_vectors(vector1, vector2));



