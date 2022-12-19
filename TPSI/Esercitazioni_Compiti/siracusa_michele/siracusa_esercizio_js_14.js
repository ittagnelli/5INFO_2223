const move_element = (vector, N, M) => {
    let tmp_array = vector.slice();
    let tmp_value = (tmp_array.splice(N, 1))[0];
    tmp_array.splice(M, 0, tmp_value);

    return tmp_array;
}

let a = [10, 20, 30, 40, 50];

let x = move_element(a, 2, 4);

console.log(x)


