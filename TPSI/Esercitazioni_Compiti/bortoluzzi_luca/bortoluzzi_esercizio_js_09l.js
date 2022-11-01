function Stampa(a,b,Call){

    console.log("risultato:", Call(a,b));
}

function Somma (a,b){
    return a+b;
}

function Prodotto (a,b){
    return a*b;
}

function Elevamento (a,b){
    return a**b;
}

Stampa(7,5, Somma);
Stampa(6,9, Prodotto);
Stampa(3,4, Elevamento);