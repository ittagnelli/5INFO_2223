function tronca(str, Number){
    if(str.length > Number)
        return str.slice(0, Number) + "..."
    else
        console.log("La stringa è corta")}
console.log(tronca("Facciamo tanti esercizi che ci fanno bene", 10))
