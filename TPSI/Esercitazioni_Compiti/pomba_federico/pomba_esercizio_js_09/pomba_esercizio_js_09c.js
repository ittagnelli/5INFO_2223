let Automobile = function(targa, cilindrata, prezzo ){ 
    (this.targa = targa), 
    (this.cilindrata = cilindrata),
    (this.prezzo = prezzo),
    (this.stamptarga = function(){ 
        console.log(`la targa è ${this.targa}`);
    }),
    (this.stampcilindrata = function(){
        console.log(`la cilindrata è ${this.cilindrata}`);
    }),
    (this.enumera = function(){
        console.log(Object.keys(this));
    })
}
let Poligono = function(pistola, fucile, proiettili){ 
    (this.pistola = pistola), 
    (this.proiettili = proiettili),
    (this.stamppistola = function(){ 
        console.log(`la pistola usata ${this.pistola}`);
    }),
    (this.stampproiettili = function(){
        console.log(`i proiettili usati sono ${this.proiettili}`);
    }),
    (this.enumera = function(){
        console.log(Object.keys(this));
    })
}
let Animale = function(razza, altezza, peso ){ 
    (this.razza = razza), 
    (this.altezza = altezza),
    (this.peso = peso),
    (this.stamprazza  = function(){
        console.log(`la razza è ${this.razza}`);
    }),
    (this.stampaltezza = function(){
        console.log(`l'altezza è ${this.altezza}`);
    }),
    (this.enumera = function(){
        console.log(Object.keys(this));
    })
}

let automobile1 = new Automobile("abc", "70", "16000", "789", "fiat");  
let automobile2 = new Automobile("efg", "50", "30000", "567", "toyota");

let animale1 = new Animale("mammifero", "20", "50");
let animale2 = new Animale("rettile", "96", "12");
let animale3 = new Animale("volatile", "34", "57");

let poligono1 = new Poligono("beretta", "jk3", "50");
let poligono2 = new Poligono("glock", "m16", "90");
let poligono3 = new Poligono("revolver", "m14", "67");

automobile1.enumera();
automobile2.enumera();

animale1.enumera();
animale2.enumera();
animale3.enumera();

poligono1.enumera();
poligono2.enumera();
poligono3.enumera();