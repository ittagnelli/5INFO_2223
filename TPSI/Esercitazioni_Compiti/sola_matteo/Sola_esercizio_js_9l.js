function svolgimento(num1, num2, funzione){
    return funzione(num1, num2);
}

function somma(a, b){
    return a + b;
}

function sottrazione(a, b){
    return a - b;
}

function moltiplicazione(a, b){
    return a * b;
}
function divisione(a, b){
    return a / b;
}   

function main() {
    console.log(`\nLa sottrazione tra i due numeri scelti è: ${svolgimento(2, 4, sottrazione)}`);
    console.log(`La moltiplicazione tra i due numeri scelti è: ${svolgimento(3, 3, moltiplicazione)}`);
    console.log(`La somma tra i due numeri scelti è: ${svolgimento(3, 5, somma)}`);
    console.log(`La divisione tra i due numeri scelti è: ${svolgimento(10, 5, divisione)}\n`);
}

main();
