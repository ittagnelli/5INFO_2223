let utente = {
    nome: "Mario",
    cognome: "Rossi",
}
let chiavi = Object.keys(utente)
console.log(chiavi)

for (i=0; i< chiavi.length; i++){
    console.log('la chiave ${chiavi[i]} ha valore ${utente[chiavi[i]]}')
}
