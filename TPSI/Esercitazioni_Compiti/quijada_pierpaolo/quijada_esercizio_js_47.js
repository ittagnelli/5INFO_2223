class Animale {
    constructor (specie,sesso,peso) {
        this.specie = specie;
        this.sesso = sesso;
        this.peso = peso;
    }

    enumera() {
        for (let key of Object.keys(this)) {console.log(key)}
    }

    get_peso(){
        return this.peso;
    }

    get_specie(){
        return this.specie;
    }
}

class Automobile {
    constructor (modello,marca,prezzo) {
        this.modello = modello;
        this.marca = marca;
        this.prezzo = prezzo;
    }

    enumera(){
        for (let key of Object.keys(this)) {console.log(key)}
    }

    get_modello(){
        return this.modello;
    }

    get_prezzo(){
        return this.prezzo;
    }
}

class Poligono {
    constructor (num_lati,lung,nome){
        this.num_lati = num_lati;
        this.lung = lung;
        this.nome = nome;
    }

    enumera(){
        for (let key of Object.keys(this)) {console.log(key)}
    }

    get_lung(){
        return this.lung;
    }

    get_nome(){
        return this.nome;
    }
}

let animale1 = new Animale("cane","M",10);
let animale2 = new Animale("gatto","F",15);
let auto1 = new Automobile("Panda","FIAT",10000);
let auto2 = new Automobile("Tipo","FIAT",20000);
let pol1 = new Poligono(4,2,"Quadrato");
let pol2 = new Poligono(3,2,"Triangolo");

animale1.enumera();
animale2.enumera();
auto1.enumera();
auto2.enumera();
pol1.enumera();
pol2.enumera();