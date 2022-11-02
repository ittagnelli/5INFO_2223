let Orario = function (ore, minuti, secondi) {
    (this.ore = ore),
    (this.minuti = minuti),
    (this.secondi = secondi)
}

function operation_orario (orario1, orario2, orario3) {

    let orari = [orario1, orario2, orario3]
    let min = 1000000000;
    let save_idx = -1;

    for (let i = 0; i < orari.length; i++) {
        const orario = orari[i];
        let num = orario.ore*10000 + orario.minuti*100+orario.secondi;
        if(min > num){
            min=num;
            save_idx = i;
        }
    }
    
    if(save_idx!=-1)
        return orari[save_idx];
    else{
        return -1;
    }
}

function main() {
    let orario1 = new Orario(12, 30, 15);
    let orario2 = new Orario(10, 40, 30);
    let orario3 = new Orario(11, 20, 10);
    let orario4 = new Orario(9, 5, 20);

    let orari = [orario1, orario2, orario3];
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

    let minore = operation_orario(orario1, orario2, orario3);
    console.log("Il minore dei primi tre numeri è:");
    console.log(minore);

    let minore2 = operation_orario(orario1, orario2, orario4);
    console.log("Il minore dei secondi tre numeri è:");
    console.log(minore2);
}

main();
