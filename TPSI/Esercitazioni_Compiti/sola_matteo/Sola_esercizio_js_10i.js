function cerca(stringa) {
    if(!stringa.includes("coding") && !stringa.includes("creativo")) {
        stringa = "parole non trovate";
    }
    
    return stringa;
}

console.log(`La prima frase restituisce: ${cerca("ciao a tutti sono Matteo")}`);
console.log(`La seconda frase restituisce: ${cerca("Per fare coding bisogna essere creativi")}`);
