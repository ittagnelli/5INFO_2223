function remove_vector(vector, N) {
    return vector.filter(item => item != N);
}

let a = [9, 8, 4, 7];

console.log(remove_vector(a, 4));


