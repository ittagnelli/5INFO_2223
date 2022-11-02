let Automobile = function (colore, lunghezza, larghezza, altezza, tipo) {
    (this.colore = colore),
    (this.lunghezza = lunghezza),
    (this.larghezza = larghezza),
    (this.altezza = altezza),
    (this.tipo = tipo)
}

function attribute(Automobile) {
    for(let chiave in Automobile) {
        console.log(`Nome: ${chiave}`);
        console.log(`Tipo: ${typeof(Automobile[chiave])}`);
        if(typeof(Automobile[chiave]) == 'string') {
            console.log(`Valore: ${Automobile[chiave].toLowerCase()}\n`);
        }else {
            console.log(`Valore: ${Automobile[chiave]}\n`);
        }
    }
}

function main() {
    let automobile1 = new Automobile('Rosso', 300, 140, 160, 'Berlina');
    let automobile2 = new Automobile('Giallo', 250, 170, 140, 'Sportiva');

    console.log("Automobile 1:");
    console.log(attribute(automobile1));
    console.log("\nAutomobile 2:");
    console.log(attribute(automobile2));
}

main();
