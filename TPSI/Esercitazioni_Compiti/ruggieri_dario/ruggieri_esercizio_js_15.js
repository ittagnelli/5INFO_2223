let vettore = [1,2,3,4,3]

function rimuovi(vettore, N){
    return vettore.filter((item) => item != 3);
}

console.log(rimuovi(vettore, 3));