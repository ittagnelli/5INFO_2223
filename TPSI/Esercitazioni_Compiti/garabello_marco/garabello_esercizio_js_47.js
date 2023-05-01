class Animale {
    #specie = "";
    #nome = "";
    #eta = 0;
    #params = [];
    constructor (specie,nome,eta) {
        this.#specie = specie;
        this.#nome = nome;
        this.#eta = eta;
        this.#params = [specie,nome,eta];
    }

    enumera() {this.#params.forEach(el => console.log(el))}
    print_eta() {console.log(this.#eta)}
    change_sp(sp) {this.#specie = sp}
}

class Automobile {
    #colore = "";
    #marca = "";
    #modello = "";
    #params = [];
    constructor (colore,marca,modello) {
        this.#colore = colore;
        this.#marca = marca;
        this.#modello = modello;
        this.#params = [colore,marca,modello];
    }

    enumera() {this.#params.forEach(el => console.log(el))}
    print_modello() {console.log(this.#modello)}
    change_col(col) {this.#colore = col}
}

class Poligono {
    #lato = 0;
    #n_lati = "";
    #reg = false;
    #params = [];
    constructor (lato,n_lati,reg) {
        this.#lato = lato;
        this.#n_lati = n_lati;
        this.#reg = reg;
        this.#params = [lato,n_lati,reg];
    }

    enumera() {this.#params.forEach(el => console.log(el))}
    print_per() {console.log(this.#lato*this.#n_lati)}
    change_reg() {this.#reg=!this.#reg}
}



let animale1 = new Animale("leone","carlo",10);
let animale2 = new Animale("pecora","piera",3);

console.log("Animale1:")
animale1.enumera()

console.log("Animale2:")
animale2.enumera()


let auto1 = new Automobile("rosso","ferrari","f90");
let auto2 = new Automobile("blu","fiat","panda");

console.log("Auto1:")
auto1.enumera()

console.log("Auto2:")
auto2.enumera()

let pol1 = new Poligono(15,3,true);
let pol2 = new Poligono(3,15,true);

console.log("poligono1:")
pol1.enumera()

console.log("poligono2:")
pol2.enumera()