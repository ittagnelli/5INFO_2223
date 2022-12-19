function rimuovi_vettore(vettore, N) {
    return vettore.filter(item => item != N);
}

let a = [9, 8, 4, 7];

console.log(rimuovi_vettore(a, 4));