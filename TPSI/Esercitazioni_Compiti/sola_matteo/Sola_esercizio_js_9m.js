let addizione = (num1, num2) => {
    return num1 + num2;
}

let sottrazione = (num1, num2) => {
    return num1 - num2;
}

let moltiplicazione = (num1, num2) => {
    return num1 * num2;
}

let divisione = (num1, num2) => {
    return num1 / num2;
}

function main() {
    console.log("Il risultato dell'addizione tra i primi due numeri è:");
    console.log(addizione(4, 5));
    console.log("Il risultato dell'addizione tra i secondi due numeri è:");
    console.log(addizione(5, 5));

    console.log("Il risultato della sottrazione tra i primi due numeri è:");
    console.log(sottrazione(3, 6));
    console.log("Il risultato della sottrazione tra i secondi due numeri è:");
    console.log(sottrazione(2, 2));

    console.log("Il risultato della moltiplicazione tra i primi due numeri è:");
    console.log(moltiplicazione(4, 6));
    console.log("Il risultato della moltiplicazione tra i secondi due numeri è:");
    console.log(moltiplicazione(2, 9));

    console.log("Il risultato della divisione tra i primi due numeri è:");
    console.log(divisione(8, 2));
    console.log("Il risultato della divisione tra i secondi due numeri è:");
    console.log(divisione(10, 5));
}

main();
