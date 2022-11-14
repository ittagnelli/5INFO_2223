function tronca(str, L){
    let cut = str.slice(0,L);
    return str.length > L ? cut.concat("...") : cut
}


console.log(tronca("Facciamo tanti esercizi che ci fanno bene", 10));