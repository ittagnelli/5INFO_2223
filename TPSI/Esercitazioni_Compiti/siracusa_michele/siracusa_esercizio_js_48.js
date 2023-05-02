class Orario {
    constructor(ore, minuti, secondi) {
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }
    
    differenzaMillisecondi(orario) {
        return (this.secondi*1000-orario.secondi*1000)+(this.minuti*60*1000-orario.minuti*60*1000)+(this.ore*3600*1000-orario.ore*3600*1000);
    }
    
    differenzaSecondi(orario) {
        return this.differenzaMillisecondi(orario)/1000;
    }

    differenzaMinuti(orario) {
        return this.differenzaSecondi(orario)/60;
    }

    differenzaOre(orario) {
        return this.differenzaMinuti(orario)/60;
    }

}

const orario1 = new Orario(17, 50, 35);
const orario2 = new Orario(12, 46, 24);

console.log(orario1.differenzaMillisecondi(orario2));
console.log(orario1.differenzaSecondi(orario2));
console.log(orario1.differenzaMinuti(orario2));
console.log(orario1.differenzaOre(orario2));

const orario3 = new Orario(13, 50, 35);
const orario4 = new Orario(12, 46, 24);

console.log("\n\n");
console.log(orario3.differenzaMillisecondi(orario4));
console.log(orario3.differenzaSecondi(orario4));
console.log(orario3.differenzaMinuti(orario4));
console.log(orario3.differenzaOre(orario4));