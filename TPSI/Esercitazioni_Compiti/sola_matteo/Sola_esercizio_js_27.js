function rimuovi_duplicati(vettore) {
    vettore.forEach((item) => {
        if(vettore.indexOf(item) != vettore.lastIndexOf(item)) vettore.splice(vettore.lastIndexOf(item), 1)   
    })
    
    return vettore
}

console.log(rimuovi_duplicati([1, 2, 3, 1, 2, 4]));