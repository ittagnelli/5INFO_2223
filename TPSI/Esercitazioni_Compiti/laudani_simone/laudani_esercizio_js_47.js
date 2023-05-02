class Animale {
  constructor (tipo, nome, età) {
      this.tipo = tipo;
      this.nome = nome;
      this.età = età;
  }

  listaProprietà() {for (let key of Object.keys(this)) {console.log(key)}}
  stampaEtà() {console.log(this.età)}
  cambiaTipo(tipo) {this.tipo = tipo}
}

class Automobile {
  constructor (colore, marca, modello) {
      this.colore = colore;
      this.marca = marca;
      this.modello = modello;
  }

  listaProprietà() {for (let key of Object.keys(this)) {console.log(key)}}
  stampaModello() {console.log(this.modello)}
  cambiaColore(colore) {this.colore = colore}
}

class Poligono {
  constructor (lunghezzaLato, numeroLati, regolare) {
      this.lunghezzaLato = lunghezzaLato;
      this.numeroLati = numeroLati;
      this.regolare = regolare;
  }

  listaProprietà() {for (let key of Object.keys(this)) {console.log(key)}}
  stampaPerimetro() {console.log(this.lunghezzaLato*this.numeroLati)}
  cambiaRegolarità() {this.regolare = !this.regolare}
}

let animale1 = new Animale("cane","Fido",3);
let animale2 = new Animale("gatto","Minù",2);

console.log("Animale 1:");
animale1.listaProprietà();

console.log("Animale 2:");
animale2.listaProprietà();


let auto1 = new Automobile("rosso","Fiat","Punto");
let auto2 = new Automobile("blu","Ford","Focus");

console.log("Auto 1:");
auto1.listaProprietà();

console.log("Auto 2:");
auto2.listaProprietà();


let pol1 = new Poligono(10,4,true);
let pol2 = new Poligono(5,3,false);

console.log("Poligono 1:");
pol1.listaProprietà();

console.log("Poligono 2:");
pol2.listaProprietà();