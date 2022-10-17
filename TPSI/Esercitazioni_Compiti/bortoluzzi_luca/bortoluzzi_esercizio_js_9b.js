let CarA = function(nome, colore, eta, tipo, autonomia) { 
    (this.nome = nome),
    (this.colore = colore),
    (this.eta = eta),
    (this.tipo = tipo),
    (this.autonomia = autonomia),
    (this.speak1 = function(){
        console.log(`${this.nome}` + ` ${this.colore}`);
        this.speak2();
    }),
    (this.speak2 = function(){
        console.log(` ${this.eta}` );
        this.speak3();
    }),
    (this.speak3 = function(){
        console.log(` ${this.autonomia}`);
    });
}

let el1 = new CarA("pippo", "bianca", "12", "bmw", "400km");
let el2 = new CarA("pippa", "verde", "13", "audi", "400km");
let el3 = new CarA("tanta", "giallo", "14", "bmw", "400km");
let el4 = new CarA("bella", "rosso", "15", "alfa-romeo", "400km");
let el5 = new CarA("ciao", "viola", "16", "mercedes", "400km");

el1.speak1();
el2.speak1();
el3.speak1();
el4.speak1();
el5.speak1();