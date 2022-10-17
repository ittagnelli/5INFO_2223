let Animale = function (nome, sesso, specie) {
    (this.nome = nome),
    (this.sesso = sesso),
    (this.specie = specie),
    (this.getSesso = function () {
         console.log(`Sesso: ${this.sesso}`); 
    }),
    (this.getNome = function () {
         console.log(`Nome: ${this.nome}`); 
    }),
    (this.enumera = function () { 
        let dati = Object.keys(this);
        for(let i = 0; i < Object.keys(this).length; i++){
            console.log(`La chiave ${dati[i]} ha  valore pari a ${Animale[dati[i]]}`)
        }
    });
  };

let Automobile = function (colore, marca, modello) {
    (this.colore = colore),
    (this.marca = marca),
    (this.modello = modello),
    (this.rename = function (modello) {
        this.modello = modello;
        console.log(`Modello: ${this.modello}`); 
    }),
    (this.change = function (colore) {
        this.colore = colore;
        console.log(`Colore: ${this.colore}`); 
    }),
    (this.enumera = function () { 
        let dati = Object.keys(this);
        for(let i = 0; i < Object.keys(this).length; i++){
            console.log(`La chiave ${dati[i]} ha  valore pari a ${Automobile[dati[i]]}`)
        }
    });
};

let Poligono = function (perimetro, area, tipo) {
    (this.perimetro = perimetro),
    (this.area = area),
    (this.tipo = tipo),
    (this.getArea = function () {
        console.log(`Area: ${this.area}`); }),
    (this.getPerimetro = function () {
        console.log(`Perimetro: ${this.perimetro}`); }),
    (this.enumera = function () { 
        let dati = Object.keys(this);
        for(let i = 0; i < Object.keys(this).length; i++){
            console.log(`La chiave ${dati[i]} ha  valore pari a ${Poligono[dati[i]]}`)
        }
    });
  };

  
let animale1 = new Animale("Luca", "M", "Orso");
let animale2 = new Animale("Pier", "M", "Panda");

let automobile1 = new Automobile("Rosso", "FIAT", "Panda");
let automobile2 = new Automobile("Verde", "LANCIA", "A112");

let poligono1 = new Poligono(40, 16, "Triangolo");
let poligono2 = new Poligono(100, 50, "Pentagono");

console.log("Animale1:");
animale1.enumera();
console.log("Animale2:");
animale2.enumera();

console.log("Automobile1:");
automobile1.enumera();
console.log("Automobile2:");
automobile2.enumera();
  
console.log("Poligono1:");
poligono1.enumera();
console.log("Poligono2:");
poligono2.enumera();
