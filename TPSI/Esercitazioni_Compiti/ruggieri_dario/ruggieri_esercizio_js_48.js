class Orario{
    constructor(ore, minuti, secondi){
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    }
    difference_ms(orario2){
        return ((this.ore*60*60*1000) + (this.minuti*60*1000) + (this.secondi*1000)) - ((orario2.ore*60*60*1000) + (orario2.minuti*60*1000) + (orario2.secondi*1000))
    }
    difference_s(orario2){
        return (this.difference_ms(orario2)/1000);
    }
    difference_m(orario2){
        return (this.difference_ms(orario2)/1000/60);
    }
    difference_h(orario2){
        return (this.difference_ms(orario2)/1000/60/60);
    }
}

let orario1 = new Orario(2,3,10);
let orario2 = new Orario(2,3,10);

console.log(orario1.difference_ms(orario2));
console.log(orario1.difference_s(orario2));
console.log(orario1.difference_m(orario2));
console.log(orario1.difference_h(orario2));