function cerca(stringa){
    if(!stringa.includes("coding") && !stringa.includes("creativo")){
        stringa = "parole non trovate";
    }
    return stringa;
}

console.log(cerca("ciao"));
console.log(cerca("Viva il coding facile e creativo"));