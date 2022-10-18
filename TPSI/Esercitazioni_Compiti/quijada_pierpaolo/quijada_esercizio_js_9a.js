let utente = {
    nome: "Pierpaolo",
    cognome: "Quijada",
}

let dati = Object.keys(utente);


for(let i = 0; i < Object.keys(utente).length; i++){
    console.log(`La chiave ${dati[i]} ha  valore pari a ${utente[dati[i]]}`)
}

