function inversione_vettori(vettore, M) {
    let parte2_vettore = [...vettore];

    vettore.splice(0, M + 1);

    parte2_vettore.splice(-M - 1);

    let vettore_invertito = vettore.concat(parte2_vettore);

    return vettore_invertito    
}

console.log(inversione_vettori([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));