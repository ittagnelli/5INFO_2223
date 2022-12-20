function invert_vector(Num) {

    let vector = Array(Num).fill(5).map((item) => item = Math.floor(Math.random()*5));

    console.log(vector);

    let inverse_vector = vector.reverse();

    console.log(inverse_vector);
}

console.log(invert_vector(10));


