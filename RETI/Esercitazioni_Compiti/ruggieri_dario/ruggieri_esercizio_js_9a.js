let utente = {
    nome: "dario",
    cognome: "ruggieri",
}

let index = Object.keys(utente).length;
let array = Object.keys(utente);

for(let i = 0; i < index; i++){
    console.log(`La chiave ${array[i]} ha  valore pari a ${utente[array[i]]}`)
}