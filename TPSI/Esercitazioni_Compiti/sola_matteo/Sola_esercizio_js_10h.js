function tronca(stringa, lunghezza) {
    if(stringa.charAt(lunghezza) != '') {
        stringa = stringa.slice(0, lunghezza);

        stringa = stringa.concat(" ...");
    }
    else {
        stringa = "Errore durante l'operazione di troncatura";
    }

    return stringa;
}

console.log(`La nuova frase è: ${tronca("ciao a tutti sono Matteo")}`);
