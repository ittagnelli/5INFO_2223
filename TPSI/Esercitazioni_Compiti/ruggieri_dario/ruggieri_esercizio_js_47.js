class Animale {
    constructor (specie,nome,eta) {
        this.specie = specie;
        this.nome = nome;
        this.eta = eta;
    }

    enumera() {for (let key of Object.keys(this)) {console.log(key)}}
    stampa_eta() {console.log(this.eta)}
    cambia_specie(sp) {this.specie = sp}
}

class Automobile {
    constructor (colore,marca,modello) {
        this.colore = colore;
        this.marca = marca;
        this.modello = modello;
    }

    enumera() {for (let key of Object.keys(this)) {console.log(key)}}
    stampa_modello() {console.log(this.modello)}
    cambia_col(col) {this.colore = col}
}

class Poligono {
    constructor (lato,n_lati,reg) {
        this.lato = lato;
        this.n_lati = n_lati;
        this.reg = reg;
    }

    enumera() {for (let key of Object.keys(this)) {console.log(key)}}
    stampa_per() {console.log(this.lato*this.n_lati)}
    cambia_reg() {this.reg=!this.reg}
}

let animale1 = new Animale("cane","kira",15);
let animale2 = new Animale("mucca","gina",6);

console.log("Animale1:");
animale1.enumera();

console.log("Animale2:");
animale2.enumera();


let auto1 = new Automobile("giallo","ferrari","portofino");
let auto2 = new Automobile("bianca","ford","kuga");

console.log("Auto1:");
auto1.enumera();

console.log("Auto2:");
auto2.enumera();

let pol1 = new Poligono(12,4,true);
let pol2 = new Poligono(1,5,true);

console.log("poligono1:");
pol1.enumera();

console.log("poligono2:");
pol2.enumera();