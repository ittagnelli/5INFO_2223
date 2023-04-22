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
            console.log("per partire devi inserire almeno la prima");
        else
            console.log("possiamo partire!!");

        console.log(`stai viaggiando cono la marcia ${this.marcia}`);
        
    }

    accendiSpegni() {
        if(this.on_off == 1)
            console.log("l'auto è gia accessa!");
        else
            console.log("l'auto è spenta, DEVI ACCENDERLA!!!");
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
      console.log(`${this.nome} emette un verso`);
    }
  
    mangia() {
      console.log(`${this.nome} mangia del cibo`);
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

console.log("\n**BMW**");
let bmw = new Automobile(3, 1, "x3");
bmw.Marcia();
bmw.accendiSpegni();
bmw.enumera();

console.log("\n**AUDI**");
let audi = new Automobile(5, 0, "rs3");
audi.Marcia();
audi.accendiSpegni();
audi.enumera();

console.log("\n**CANE**");
let cane = new Animale("Pippo", "cane", 5);
cane.mangia();
cane.emettiVerso();
cane.enumera();

console.log("\n**GATTO**");
let gatto = new Animale("Fuffy", "gatto", 1);
gatto.mangia();
gatto.emettiVerso();
gatto.enumera();




