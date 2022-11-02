function magg(numero1, numero2) {
    let verifica = (numero1 > numero2) ? numero1: numero2;
    if(numero1 == numero2) {
        console.log("I numeri sono uguali");
        return null;
    }

    return verifica;
}

function main() {
    console.log("Il maggiore tra i primi numeri vale:");
    console.log(magg(10, 20));

    console.log("Il maggiore tra i secondi numeri vale:");
    console.log(magg(25, 30));

    console.log("Il maggiore tra i terzi numeri vale:");
    console.log(magg(35, 40));
}

main();