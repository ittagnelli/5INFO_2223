class Orario{

    constructor(ore, minuti, secondi){
      
        this.ore = ore;
        this.minuti = minuti;
        this.secondi = secondi;
    
    }
    ll(orario2){
        
      return ((this.ore*60*60*1000) + (this.minuti*60*1000) + (this.secondi*1000)) - ((orario2.ore*60*60*1000) + (orario2.minuti*60*1000) + (orario2.secondi*1000));
    }
    confronto(orario2){
        return (this.ll(orario2) == 0 ? "uguali" : this.mill(orario2) < 0 ? "orario1" : "orario2");
    }
}
let orario1 = new Orario(3,32,2);
let orario2 = new Orario(1,4,9);
console.log(orario1.confronto(orario2));
