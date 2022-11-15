function cerca(stringa) {
    
    if(!stringa.includes("coding") && !stringa.includes("creativo")) {
        stringa = "parole non trovate";
    }
    
    return stringa;
}

console.log(`la prima frase restituisce: ${cerca("ciao a tutti sono Federicoo")}`);


console.log(`la seconda frase restituisce: ${cerca("Per fare coding bisogna essere creativi")}`);