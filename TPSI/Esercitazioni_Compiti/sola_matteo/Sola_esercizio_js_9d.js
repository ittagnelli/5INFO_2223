function sommaNumeri(parametro){
    let somma = 0;
    for(let i = 1; i <= +parametro; i++){
        somma = somma + i;
    }
    return somma;
}

function main() {
    console.log(`La somma del primo numero è ${sommaNumeri(5)}`);
    console.log(`La somma del primo numero è ${sommaNumeri(10)}`);
    console.log(`La somma del primo numero è ${sommaNumeri(15)}`);
}

main();
