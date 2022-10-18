let Automobile = function(nome, marca, colore){
  (this.nome = nome),
  (this.marca = marca),
  (this.colore = colore),
  (this.nome = (nuovo_nome)=> this.nome = nuovo_nome),
  (this.marca = (nuova_marca)  => this.marca = nuova_marca);
  (this.enumera = () =>   console.log(Object.keys(this)));
};

let Animale = function(nome, famiglia, eta){
  (this.nome = nome),
  (this.famiglia =  famiglia),
  (this.eta = eta),
  (this.nome = (nuovo_nome) => this.nome = nuovo_nome),
  (this.eta = (nuova_eta) => this.eta = nuova_eta),
  (this.enumera = () => console.log(Object.keys(this)));
}
let Poligono = function(spazio, volume, area ){
 (this.spazio = spazio),
 (this.volume = volume),
 (this.area = area),
 (this.spazio = (nuova_spazio, nuovo_volume) => {this.spazio = nuova_spazio; this.volume = nuovo_volume;}),
 (this.volume = (nuovo_volume, nuova_spazio) => {this.volume = nuovo_volume; this.spazio = nuova_spazio;}),
 (this.enumera = () => console.log(Object.keys(this)));
}


let auto1 = new Automobile("Panda", "Fiat", "Blu");
let auto2 = new Automobile("Punto", "Lancia", "Verde");
auto1.enumera();
auto2.enumera();

let anim1 = new Animale("willy", "ha famiglia", 2);
let anim2 = new Animale("marco", "è solo", 7);
anim1.enumera();
anim2.enumera();

let poligono1 = new Poligono(2000, 125, 16);
let poligono2 = new Poligono(8902, 999, 3395);
poligono1.enumera();
poligono2.enumera();