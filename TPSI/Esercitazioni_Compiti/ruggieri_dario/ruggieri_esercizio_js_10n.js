function insert(stringa1, stringa2, N){
    let inizio = stringa1.slice(0, N+1);
    let fine = stringa1.slice(N);
    let risultato = "";
    return risultato.concat(inizio, stringa2, fine);
}

console.log(insert("Facciamo tanti esercizi che ci fanno bene", "JavaScript", 23 ));