function tronca(stringa, numero) {
    let stringa_divisa = stringa.split(" ");
    let risultato = "";

    if(stringa_divisa.length >= numero) {
        for(let i = 0; i < numero; i++) {
            risultato = risultato.concat(" ", stringa_divisa[i]);
            risultato = risultato.trim();
        }
    }
    else {
        risultato = "Errore durante l'operazione";
    }

    return risultato;
}

console.log(tronca("Ciao a tutti sono Matteo", 3));
console.log(tronca("ciao a tutti", 200));
