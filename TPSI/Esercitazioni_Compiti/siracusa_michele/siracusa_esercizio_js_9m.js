let add = (numero1, numero2) => {
    return numero1 + numero2;
}


let sott = (numero1, numero2) => {
    return numero1 - numero2;
}


let molt = (numero1, numero2) => {
    return numero1 * numero2;
}


let div = (numero1, numero2) => {
    return numero1 / numero2;
}


function main() {
    console.log("La sottrazione dei primi due numeri vale:");
    console.log(sott(10, 10));
    console.log("La sottrazione dei secondi due numeri vale:");
    console.log(sott(5, 10));

    console.log("La moltiplicazione dei primi due numeri vale:");
    console.log(molt(10, 10));
    console.log("La moltiplicazione dei secondi due numeri vale:");
    console.log(molt(20, 20));

    console.log("La divisione dei primi due numeri vale:");
    console.log(div(10, 5));
    console.log("La divisione dei secondi due numeri vale:");
    console.log(div(20, 5));

    console.log("L'addizione dei primi due numeri vale:");
    console.log(add(10, 10));
    console.log("L'addizione dei secondi due numeri vale:");
    console.log(add(20, 20));
    
}

main();