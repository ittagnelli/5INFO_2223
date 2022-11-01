let somma = (num1, num2) =>{
    return num1+num2;
}
let prodotto = (num1, num2) =>{
    return num1*num2;
}
let divisione = (num1, num2) =>{
    if(num2 != 0)
        return num1/num2;
}
let potenza = (num1, num2) =>{
    if(num1 == 0 & num2 == 0){
        console.log("impossibile");
        return;
    }
    else{
        return num1**num2;
    }
}


console.log("Somma 5 e 3: ", somma(5,3));
console.log("Somma 5 e 5: ", somma(5,5));

console.log("Prodotto 5 e 3: ", prodotto(5,3));
console.log("Prodotto 5 e 5: ", prodotto(5,5));

console.log("Divisione 5 e 3: ", divisione(5,3));
console.log("Divsione 5 e 5: ", divisione(5,5));

console.log("Potenza 5 e 3: ", potenza(5,3));
console.log("Potenza 5 e 5: ", potenza(5,5));