class Orario {
    constructor (secondi,minuti,ore) {
        this.secondi = secondi;
        this.minuti = minuti;
        this.ore = ore;
    }

    differenza_minore(orario2,orario3){
        let millisecondi1 = orario2.secondi*1000 + ((orario2.minuti*60)*1000) + (((orario2.ore *60)*1000)*1000);
        let millisecondi2 = this.secondi*1000 + ((this.minuti*60)*1000) + (this.ore*60*1000);
        let millisecondi3 = orario3.secondi*1000 + ((orario3.minuti*60)*1000) + (((orario3.ore *60)*1000)*1000);

        if(millisecondi1 < millisecondi2 && millisecondi1 < millisecondi3) return millisecondi1/1000/60/60;
        if(millisecondi2 < millisecondi3 && millisecondi2 < millisecondi1) return millisecondi2/1000/60/60;
        if(millisecondi3 < millisecondi1 && millisecondi3 < millisecondi2) return millisecondi3/1000/60/60;
    }
}

let data1 = new Orario(10000000,30,2);
let data2 = new Orario(100000,30000,2);
let data3 = new Orario(100,60,3);

console.log(`Data minore: ${data1.differenza_minore(data2,data3)}`);