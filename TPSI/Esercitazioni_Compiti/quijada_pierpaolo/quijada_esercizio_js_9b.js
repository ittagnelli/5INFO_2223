let Automobile = function (colore, marca, modello, posti, prezzo){
    (this.colore = colore),
    (this.marca = marca),
    (this.modello = modello),
    (this.posti = posti),
    (this.prezzo = prezzo),
    (this.getMarca = function () {
        console.log(`Marca: ${this.marca}`);
    });
    (this.getPosti = function () {
        console.log(`Posti: ${this.posti}`);
    });
    (this.getPrezzo = function () {
        console.log(`Prezzo: ${this.prezzo}`);
    });
}

let automobile1 = new Automobile("Rosso", "FIAT", "Panda", 4, 6000);
let automobile2 = new Automobile("Verde", "LANCIA", "A112", 4, 10000);
let automobile3 = new Automobile("Blu", "TESLA", "Model S", 4, 20000);
let automobile4 = new Automobile("Rosso", "FERRARI", "296 GTB", 2, 275.500);
let automobile5 = new Automobile("Bianco", "FERRARI", "F8 Tributo", 2, 262.000);    

console.log("Auto1");
automobile1.getMarca();
automobile1.getPosti();
automobile1.getPrezzo();

console.log("Auto2");
automobile2.getMarca();
automobile2.getPosti();
automobile2.getPrezzo();

console.log("Auto3");
automobile3.getMarca();
automobile3.getPosti();
automobile3.getPrezzo();

console.log("Auto4");
automobile4.getMarca();
automobile4.getPosti();
automobile4.getPrezzo();

console.log("Auto5");
automobile5.getMarca();
automobile5.getPosti();
automobile5.getPrezzo();