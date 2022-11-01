function callback_function(num1, num2, action){
    return action(num1, num2);
}
function somma(num1, num2){
    return num1+num2;
}
function prodotto(num1, num2){
    return num1*num2;
}
function potenza(num1, num2){
    if(num1 == 0 & num2 == 0){
        console.log("impossibile");
        return;
    }
    else{
        return num1**num2;
    }
}

console.log("Somma 3 e 4: ", callback_function(3,4, somma));
console.log("Prodotto 3 e 4: ", callback_function(3,4, prodotto));
console.log("Potenza 3 e 4: ", callback_function(3,4, potenza));