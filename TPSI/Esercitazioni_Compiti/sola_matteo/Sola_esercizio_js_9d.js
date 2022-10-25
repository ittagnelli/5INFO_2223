function sommaNumeri(parametro){
    let somma;
    let cont = parametro;
    for(let i = 0; i < cont; i++){
        somma = somma + parametro;
        parametro--;
        i++;
    }
    return somma;
}

console.log(`La somma del primo numero è ${sommaNumeri(70)}`);
console.log(`La somma del primo numero è ${sommaNumeri(80)}`);
console.log(`La somma del primo numero è ${sommaNumeri(90)}`);
