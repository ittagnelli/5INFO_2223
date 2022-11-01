
function sommanumeri (num){
    let somma=0;
    for(let i=0; i<num; i++) somma = num*(num+1)/2;
    return somma;
}

    let num;
    let somma;
    let somma3;
    let somma2;
    somma = sommanumeri (5);
    console.log(`La prima somma vale: ${somma}`);
    somma2= sommanumeri (3);
    console.log(`La seconda somma vale: ${somma2}`);
    somma3= sommanumeri (8);
    console.log(`La terza somma vale: ${somma3}`);