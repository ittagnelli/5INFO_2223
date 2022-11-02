let Orario = function (ore, minuti, secondi) {
    (this.ore = ore),
    (this.minuti = minuti),
    (this.secondi = secondi)
}

function operation_orario(orario1, orario2) {
    let differenza_ore = Math.abs(orario1.ore - orario2.ore);
    // if(orario1.minuti < orario2.minuti) {
    //     let differenza_minuti = differenza_ore*60 - Math.abs(orario1.minuti - orario2.minuti);
    // }else {
    //     let differenza_minuti = differenza_ore*60 + Math.abs(orario1.minuti - orario2.minuti);
    // }
    // if(orario1.secondi < orario2.secondi) {
    //     let differenza_secondi = differenza_minuti*60 - Math.abs(orario1.secondi - orario2.secondi);
    // }else {
    //     let differenza_secondi = differenza_minuti*60 + Math.abs(orario1.secondi - orario2.secondi);
    // }
    let differenza_minuti = differenza_ore*60  + (orario1.minuti - orario2.minuti);
    let differenza_secondi = differenza_minuti*60 + (orario1.secondi - orario2.secondi);
    let differenza_millisecondi = differenza_secondi*1000;

    return {
        differenza_ore: differenza_ore,
        differenza_minuti: differenza_minuti,
        differenza_secondi: differenza_secondi,
        differenza_millisecondi: differenza_millisecondi
    }
}

function main() {
    let orario1 = new Orario(12, 30, 15);
    let orario2 = new Orario(10, 40, 30);

    let orari = [orario1, orario2];
    for (let i = 0; i < orari.length; i++) {
        const element = orari[i];

        if(element.ore < 0 || element.ore > 23 ||
           element.minuti < 0 || element.minuti > 59 ||
           element.secondi < 0 || element.secondi > 59)
           {
            console.log("Orario non valido:");
            console.log(orari[i]);
            return 0;
           }
    }

    let differenza_orario = operation_orario(orario1, orario2);
    let differenza_orario2 = operation_orario(orario2, orario1);
    console.log("La differenza tra la prima sequenza di orari è:")
    console.log(differenza_orario);
    console.log("La differenza tra la seconda sequenza di orari è:");
    console.log(differenza_orario2);
}

main();
