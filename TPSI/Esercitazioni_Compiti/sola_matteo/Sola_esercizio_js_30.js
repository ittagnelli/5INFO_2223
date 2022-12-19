function vettore_ristretto(vettore, N, M) {
   let vettore_ristretto = vettore.filter((item) => item >= N && item <= M);

   return vettore_ristretto
}

let vettore = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

console.log(vettore_ristretto(vettore, 20, 70));