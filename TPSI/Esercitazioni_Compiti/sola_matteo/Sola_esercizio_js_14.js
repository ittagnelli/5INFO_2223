const nuovo_elemento = (vettore, N, M) => {
    let tmp_array = vettore.slice();
    let tmp_value = (tmp_array.splice(N, 1))[0];
    tmp_array.splice(M, 0, tmp_value);

    return tmp_array;
}

let a = [10, 20, 30, 40, 50];

let x = nuovo_elemento(a, 0, 2);

console.log(x);