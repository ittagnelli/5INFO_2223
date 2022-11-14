function tronca(stringa, numero) {
    if(stringa.charAt(numero) != '') {
        stringa = stringa.slice(0, numero);
        stringa = stringa.concat("...");
    }
    else {
        stringa = "Errore durante l'operazione";
    }

    return stringa;
}

console.log(`La prima frase restituisce: ${tronca("Ciao a tutti sono Matteo", 10)}`);
console.log(`La seconda frase restituisce: ${tronca("ciao a tutti", 200)}`);
