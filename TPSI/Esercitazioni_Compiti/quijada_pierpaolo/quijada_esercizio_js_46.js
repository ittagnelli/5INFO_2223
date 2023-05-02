class Automobile{

    constructor(modello, marca, prezzo, cilindrata, colore){
        this.modello = modello;
        this.marca = marca;
        this.prezzo = prezzo;
        this.cilindrata = cilindrata;
        this.colore = colore;
    }

    get_colore(){
        return this._colore;
    }

    get_prezzo(){
        return this._prezzo;
    }

    get_cilindrata(){
        return this._cilindrata;
    }
}

let automobile1 = new Automobile("Ducato", "FIAT", 33000, 140, "Bianco");
let automobile2 = new Automobile("500x", "FIAT", 23000, 130, "Nero");
let automobile3 = new Automobile("Panda", "FIAT", 19000, 80, "Bianco");
let automobile4 = new Automobile("500L", "FIAT", 20000, 95, "Rosso");
let automobile5 = new Automobile("Tipo", "FIAT", 27000, 130, "Grigio");

console.log(automobile1.get_colore());
console.log(automobile1.get_prezzo());
console.log(automobile1.get_cilindrata());

console.log(automobile2.get_colore());
console.log(automobile2.get_prezzo());
console.log(automobile2.get_cilindrata());

console.log(automobile3.get_colore());
console.log(automobile3.get_prezzo());
console.log(automobile3.get_cilindrata());

console.log(automobile4.get_colore());
console.log(automobile4.get_prezzo());
console.log(automobile4.get_cilindrata());

console.log(automobile5.get_colore());
console.log(automobile5.get_prezzo());
console.log(automobile5.get_cilindrata());