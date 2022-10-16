let Automobile = function(marca, colore, fari){
    (this.marca = marca),
    (this.colore = colore),
    (this.fari = fari),
    (this.cambia_colore = (nuovo_colore)=> this.colore = nuovo_colore),
    (this.accendi_spegni_fari = (valore)  => this.fari = valore);
    (this.enumera = () => console.log(Object.keys(this)));
};
let Animale = function(nome, specie, eta){
    (this.nome = nome),
    (this.specie =  specie),
    (this.eta = eta),
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


let automobile1 = new Automobile("Dacia", "Rosso", true);
let automobile2 = new Automobile("Seat", "Blu", false);

automobile1.enumera();
automobile2.enumera();

let animale1 = new Animale("Billy", "Canis Lupus", 10);
let animale2 = new Animale("John", "Delphinidae", 13);

animale1.enumera();
animale2.enumera();

let poligono1 = new Poligono(300, 400, "convessa");
let poligono2 = new Poligono(200, 350, "concavo");

poligono1.enumera();
poligono2.enumera();