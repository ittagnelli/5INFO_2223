class Poligono {


    
    constructor(l, n, nf) { 
        this.l = l;
        this.n = n;
        this.nf = nf;
    }
    Perimetro() {
        return this.l * this.n;
    }

    Area() {
        return ((this.l * this.n) * (this.l * this.nf)) / 2;
    }   
    enumera() {
        console.log("tutte le chiavi: \n" + Object.keys(this));
    }
}
class Automobile {
    constructor(marcia, on_off, modello) {
        this.marcia = marcia;
        this.on_off = on_off;
        this.modello = modello;
    }
    Marcia() {
        if(this.marcia <= 0)
            console.log("Devi inserire almeno la prima");
        else
            console.log("1..2..3..Partenza..Viaa!");

        console.log(`stai viaggiando con la marcia ${this.marcia}`);
        
    }
    accendiSpegni() {
        if(this.on_off == 1)
            console.log("l'auto è gia accessa!");
        else
            console.log("l'auto è spenta, ACCENDILA");
    }

    enumera() {
        console.log("tutte le chiavi: \n" + Object.keys(this));
    }
}

class Animale {
    constructor(nome, tipo, eta) {
      this.nome = nome;
      this.tipo = tipo;
      this.eta = eta;
    }
  
    emettiVerso() {
      console.log(`${this.nome} verso`);
    }
    mangia() {
      console.log(`${this.nome} mangia`);
    } 
    enumera() {
        console.log("tutte le chiavi: \n" + Object.keys(this));
    }
}
console.log("\n**QUADRATO**");
let quad = new Poligono(10, 4, 0.5);
quad.enumera();
console.log("area: ", quad.Area());
console.log("perimetro: ", quad.Perimetro());

console.log("\n**TRIANGOLO**");
let triang = new Poligono(15, 3, 0.289);
console.log("area: ", triang.Area());
console.log("perimetro: ", triang.Perimetro());
triang.enumera();

console.log("\n**Ferrari**");
let ferrari = new Automobile(4, 1, "488");
ferrari.Marcia();
ferrari.accendiSpegni();
ferrari.enumera();

console.log("\n**AUDI**");
let audi = new Automobile(2, 0, "rs3");
audi.Marcia();
audi.accendiSpegni();
audi.enumera();

console.log("\n**CANE**");
let cane = new Animale("pluto", "cane", 3);
cane.mangia();
cane.emettiVerso();
cane.enumera();

console.log("\n**GATTO**");
let gatto = new Animale("gattoConGliStivali", "gatto", 4);
gatto.mangia();

gatto.emettiVerso();
gatto.enumera();