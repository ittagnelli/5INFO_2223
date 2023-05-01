class Automobile {
    constructor(marca, modello, costo, colore, altezza){
        this.marca = marca;
        this.modello = modello;
        this.costo = costo;
        this.colore = colore;
        this.altezza = altezza;
    }

    stampatutto() {
        console.log(`${this.marca}, ${this.modello }, ${this.costo}, ${this.colore}, ${this.altezza}`);
    }

    mod(){console.log(`${this.modello}`);}

    cost(){console.log(`${this.costo}`);}
}


let auto1 = new Automobile("toyota","X",300000,"blu",130);
auto1.stampatutto();
auto1.mod();
auto1.cost();

let auto2 = new Automobile("pegout","G",400000,"rosso",120);
auto2.stampatutto();
auto2.mod();
auto2.cost();

let auto3 = new Automobile("renault","f",70000,"    ",160);
auto3.stampatutto();
auto3.mod();
auto3.cost();