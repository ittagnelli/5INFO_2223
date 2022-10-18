let Automobile = function (targa, cilindrata, velocita, color, owner) {
    (this.targa = targa),
    (this.cilindrata = cilindrata),
    (this.velocita = velocita),
    (this.color = color),
    (this.owner = owner),
    (this.get_targa = function () {
      console.log(`Targa: ${this.targa}`);
    });
    (this.getcilindrata = function () {
      console.log(`Cilindrata ${this.cilindrata}`);
    });
    (this.enumera = function () {
        console.log(Object.keys(this));
      });
};

let Animale = function (tipo, specie, nome){
    (this.tipo= tipo),
    (this.specie= specie),
    (this.nome= nome),
    (this.caratteristiche = () => console.log(`Tipo: ${this.tipo} Specie: ${this.specie}`)),
    (this.getnome = () => console.log(`Nome: ${this.nome}`)),
    (this.enumera = () => console.log(Object.keys(this)))
};

let Poligono = function (tipo,  angoli , nome){
    (this.tipo= tipo),
    (this.angoli= angoli),
    (this.nome= nome),
    (this.caratteristiche = () => console.log(`Tipo: ${this.tipo} Angoli: ${this.angoli}`)),
    (this.getnome = () => console.log(`Nome: ${this.nome}`))
    (this.enumera = () => console.log(Object.keys(this)))
};

let auto0 = new Automobile("A1F46", "una cilindrata", "80km/h", "rosso", "Gcc" );
let auto1 = new Automobile("A15GE", "una cilindrata", "130km/h", "blu", "Gigi" );

let animale0 = new Animale("Pesce", "vertebrato", "Phylum Chordata");
let animale1 = new Animale("Uccello", "vertebrato", "Aves");

let poligono0 = new Poligono("Ettagono", "7", "Ettangolo");
let poligono1 = new Poligono("Quadrangoli", "5", "Trapezio");

console.log(auto0.enumera());
console.log(auto1.enumera());

console.log(animale0.enumera());
console.log(aniamle1.enumera());

console.log(poligono0.enumera());
console.log(poligono1.enumera());