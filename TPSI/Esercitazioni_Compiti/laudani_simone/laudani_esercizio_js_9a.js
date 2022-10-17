let utente = {
    nome: "Simone",
    cognome: "Laudani",
}

let array = Object.keys(utente);
let index = Object.keys(utente).length;

for(let i = 0; i < index; i++){
    console.log(`La chiave ${array[i]} ha  valore pari a ${utente[array[i]]}`)
}