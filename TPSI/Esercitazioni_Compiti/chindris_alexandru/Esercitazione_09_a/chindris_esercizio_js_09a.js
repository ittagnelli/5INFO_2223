let utente = {
    nome: "Mario",
    cognome: "Rossi"
}

let chiave = Object.keys(utente); // ritorna il numero complessivo degli elementi

for( let x = 0 ; x < chiave.length ;x++) {
    // console.log(`Nome: ${utente.nome}  Cognome: ${utente.cognome}!`); 
    console.log(`${chiave[x]}:  ${utente[chiave[x]]}`);
}

