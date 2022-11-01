let utente = {
    nome: `Giacomo`,
    cognome: `Lurgo`,
    età: 18,
    altezza: 1.89,
    anno: 2004,
};

function controllo () {
    for(key in utente){
        console.log(`La chiave ${key} è di tipo: ${typeof(key)}`);
    }
}

controllo();