function sommaNumeri(parametro){
    let somma = 0;
    let num = parametro;
    for(let i = 0; i < num; i++){
        somma = somma + parametro;
        parametro--;
        i++;
    }
    return somma;
}
console.log(`La somma del primo numero è ${sommaNumeri(70)}`);
console.log(`La somma del primo numero è ${sommaNumeri(80)}`);
console.log(`La somma del primo numero è ${sommaNumeri(90)}`);