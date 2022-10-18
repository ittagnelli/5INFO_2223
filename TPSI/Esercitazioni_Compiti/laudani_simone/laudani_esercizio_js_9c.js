let Automobile = function(casa_automobilistica, colore, abbaglianti){
    (this.casa_automobilistica = casa_automobilistica),
    (this.colore = colore),
    (this.abbaglianti = abbaglianti),
    (this.cambia_colore = (nuovo_colore)=> this.colore = nuovo_colore),
    (this.accendi_spegni_abbaglianti = (valore)  => this.abbaglianti = valore);
    (this.enumera = () => console.log(Object.keys(this)));
};
let Animale = function(nome, razza, eta){
    (this.nome = nome),
    (this.eta = eta),
    (this.razza =  razza),
    (this.cambia_nome = (nuovo_nome) => this.nome = nuovo_nome),
    (this.cambia_eta = (nuova_eta) => this.eta = nuova_eta),
    (this.enumera = () => console.log(Object.keys(this)));
}
let Poligono = function(area, volume, concavita ){
   (this.area = area),
   (this.volume = volume),
   (this.concavita = concavita),
   (this.cambia_area = (nuova_area, nuovo_volume) => {this.area = nuova_area; this.volume = nuovo_volume;}),
   (this.cambia_volume = (nuovo_volume, nuova_area) => {this.volume = nuovo_volume; this.area = nuova_area;}),
   (this.enumera = () => console.log(Object.keys(this)));
}


let automobile1 = new Automobile("Teslla", "Bianco", true);
let automobile2 = new Automobile("Ford", "Blu", false);

automobile1.enumera();
automobile2.enumera();

let animale1 = new Animale("abcde", "Canis Lupus", 10);
let animale2 = new Animale("efghi", "Delphinidae", 13);

animale1.enumera();
animale2.enumera();

let poligono1 = new Poligono(10, 20, "convessa");
let poligono2 = new Poligono(30, 40, "concavo");

poligono1.enumera();
poligono2.enumera();