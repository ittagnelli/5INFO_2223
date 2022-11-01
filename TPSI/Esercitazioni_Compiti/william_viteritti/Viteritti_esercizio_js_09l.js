function Stampa(a,b,miaCallback){

    console.log("Il risultato e:", miaCallback(a,b));
}

function Somma (a,b){
    return a+b;
}

function Moltiplicazione (a,b){
    return a*b;
}

function Elevamento (a,b){
    return a**b;
}

Stampa(2,3, Somma);
Stampa(3,7, Moltiplicazione);
Stampa(2,4, Elevamento);