class CarA{
    constructor(name, colore, eta, tipo, autonomia){
        (this.name = name);
        (this.colore = colore);
        (this.eta = eta);
        (this.tipo = tipo);
        (this.autonomia = autonomia);

       (this.call1 = function(){
            console.log(`il nome è ${this.name}`);
            console.log(`il colore è ${this.colore}`);
            this.call2();
        });

        (this.call2 = function(){
            console.log(`L'eta è ${this.eta}`);
            this.call3();
        });

        (this.call3 = function(){
            console.log(`Il tipo è ${this.tipo}`);
            console.log(`Ha ${this.autonomia} di autonomia`);
        });
    }
}


let el1 = new CarA("pippo", "bianca", "12", "bmw", "400km");
let el2 = new CarA("pippa", "verde", "13", "audi", "400km");
let el3 = new CarA("tanta", "giallo", "14", "bmw", "400km");
let el4 = new CarA("bella", "rosso", "15", "alfa-romeo", "400km");
let el5 = new CarA("ciao", "viola", "16", "mercedes", "400km");

for(let i=1; i<=1; i++) {
    el1.call1();
    el2.call1();
    el3.call1();
    el4.call1();
    el5.call1();
}
