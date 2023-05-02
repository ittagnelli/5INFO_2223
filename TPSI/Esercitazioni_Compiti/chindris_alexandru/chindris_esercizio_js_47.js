class Animale {
    constructor (nome,altezza,eta) {
        this.nome = nome;
        this.altezza = altezza;
        this.eta = eta;
    }

    enumera() {for (let key of Object.keys(this)) {console.log(key)}}
    stampa_eta() {console.log(this.eta)}
    specie(x) {this.specie = x}
}

class Automobile {
    constructor (modello,colore,costo) {
        this.modello = modello;
        this.colore = colore;
        this.costo = costo;
    }

    enumera() {for (let key of Object.keys(this)) {console.log(key)}}
    mod() {console.log(this.modello);}
    cost() {console.log(this.costo);}
}

class Poligono {
    constructor (lato,n_lati,colore) {
        this.lato = lato;
        this.n_lati = n_lati;
        this.colore = colore;
    }

    enumera() {for (let key of Object.keys(this)) {console.log(key);}}
    perimetro() {console.log(this.lato*this.n_lati);}
    col() {console.log(this.colore);}
}



let animale1 = new Animale("gatto",12,3);
animale1.enumera();
let animale2 = new Animale("scimmia",5,4);
animale2.enumera();


let auto1 = new Automobile("giallo","ferrari",23);
auto1.enumera();
let auto2 = new Automobile("bianca","ford",65);
auto2.enumera();

let pol1 = new Poligono(12,4,"blue");
pol1.enumera();

let pol2 = new Poligono(1,5,"rosso");
pol2.enumera();