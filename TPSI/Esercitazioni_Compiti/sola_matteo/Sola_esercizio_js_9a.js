let utente = {
    nome: "Matteo",
    cognome: "Sola",
    età: 18,
    anno: 2004
}

let chiave = Object.keys(utente);
let lunghezza_utente = Object.keys(utente).length;

for(let i = 0; i < lunghezza_utente; i++){
    console.log(`La chiave ${chiave[i]} ha valore ${utente[chiave[i]]}`);
}
