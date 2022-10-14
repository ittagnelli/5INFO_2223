let utente = {
    nome: "Mario",
    cognome: "Rossi"
}

let keys = Object.keys(utente);

for(let i = 0; i < keys.length; i++){
    console.log(`la chiave ${keys[i]} ha valore ${utente[keys[i]]}`)
}