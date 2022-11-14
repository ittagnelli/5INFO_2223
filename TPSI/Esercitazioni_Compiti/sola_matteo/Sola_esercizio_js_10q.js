function remove(stringa1, stringa2) {
    let stringa_finale = "";

    if(stringa1.includes(stringa2)) {
        stringa_finale = stringa1.replace(stringa2 + " ", "");
    }
    else {
        stringa_finale = "Non è presente la stringa richiesta da rimuovere";
    }

    return stringa_finale;
}

console.log(`La prima frase restituisce: ${remove("The quick brown fox jumps over the lazy dog", "the")}`);
console.log(`La seconda frase restituisce: ${remove("The quick brown fox jumps over the lazy dog", "football")}`);
