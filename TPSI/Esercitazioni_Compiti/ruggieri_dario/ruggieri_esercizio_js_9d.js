
console.log("La somma dei numeri compresi tra 0 e 3: ",somma(3));
console.log("La somma dei numeri compresi tra 0 e 7: ",somma("7"));
console.log("La somma dei numeri compresi tra 0 e 5: ",somma(5));

function somma(n){
    let risultato = 0;
    risultato = (+n*(+n+1))/2;
    return risultato;
}