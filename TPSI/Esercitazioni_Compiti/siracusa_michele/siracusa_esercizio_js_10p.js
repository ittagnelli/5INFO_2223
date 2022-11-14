function tronca(str, Number){ 
    return str.split(' ').slice(0,Number).join(' ')
    
}

console.log(tronca("Facciamo tanti esercizi che ci fanno bene", 3))


