function insert(stringa1, stringa2, numero) {
    return stringa1.slice(0, numero) + " " + stringa2 + stringa1.slice(numero);
}
 
console.log(`La frase finale è: ${insert("Facciamo tanti esercizi che ci fanno bene", "JavaScript", 23)}`);
