function magg(numero1, numero2, numero3) {
    let verifica = (numero1 > numero2) ? numero1: (numero2 > numero3) ? numero2: numero3;
    if(numero1 == numero2 && numero2 == numero3) {
        console.log("I numeri sono uguali");
        return null;
    }

    return verifica;
}


function main() {
    console.log("Il maggiore tra i primi numeri vale:");
    console.log(magg(-15, 15, 30));

    console.log("Il maggiore tra i secondi numeri vale:");
    console.log(magg(-5, 5, 10));

    console.log("Il maggiore tra i terzi numeri vale:");
    console.log(magg(-10, 10, 15));

}

main();