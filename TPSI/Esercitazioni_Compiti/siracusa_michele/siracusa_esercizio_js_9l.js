function operazione(numero1, numero2, funz){
    return funz(numero1, numero2);
}


function add(a, b){
    return a + b;
}


function sott(a, b){
    return a - b;
}


function molt(a, b){
    return a * b;
}


function div(a, b){
    return a / b;
}   


function main() {
    console.log(`La moltiplicazione vale: ${operazione(10, 10, molt)}`);
    console.log(`La somma vale ${operazione(2, 2, add)}`);
    console.log(`La divisione vale: ${operazione(20, 4, div)}\n`);
    console.log(`\nLa sottrazione vale: ${operazione(100, 20, sott)}`);
}

main();



