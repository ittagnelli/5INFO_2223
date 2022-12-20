function vector_inversion(vector, M) {

    let part2_vector = [...vector];

    vector.splice(0, M + 1);

    part2_vector.splice(-M - 1);

    let vector_inversion = vector.concat(parte2_vector);

    return vector_inversion;   
}

console.log(vector_inversion([1, 2, 3, 4, 5], 3));


