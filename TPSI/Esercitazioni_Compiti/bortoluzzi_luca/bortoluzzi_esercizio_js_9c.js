let Animale = function(name, specie, eta){
    (this.name = name),
    (this.specie = specie),
    (this.eta = eta),

    (this.call1 = function(){
        
        console.log(`il colore è ${this.specie}`);
        this.call2();
    });

    (this.call2 = function(){
        console.log(`L'eta è ${this.eta}`);
    });

    (this.enumera = function(){
        console.log(`il nome è ${this.name}`);
        this.call1();
    });
}

let Automobile = function(name, colore, eta){
    (this.name = name),
    (this.colore = colore),
    (this.eta = eta),

    (this.call1 = function(){
        
        console.log(`il colore è ${this.colore}`);
        this.call2();
    });

    (this.call2 = function(){
        console.log(`L'eta è ${this.eta}`);
    });

    (this.enumera = function(){
        console.log(`il nome è ${this.name}`);
        this.call1();
    });
}

let Poligono = function(distanza, proiettile, arma){
    (this.distanza = distanza);
    (this.proiettile = proiettile);
    (this.arma = arma);

    (this.call1 = function(){
        
        console.log(`il proiettile è ${this.proiettile}`);
        this.call2();
    });

    (this.call2 = function(){
        console.log(`L'arma è ${this.arma}`);
    });

    (this.enumera = function(){
        console.log(`la distanza è ${this.distanza}`);
        this.call1();
    });
}

let el1 = new Animale("pippo", "leone", "7");
let el2 = new Animale("pippa", "macaco", "8");
let el3 = new Automobile("jo", "giallo", "14");
let el4 = new Automobile("tia", "rosso", "15");
let el5 = new Poligono("300", "esplosivo", "cecchino");
let el6 = new Poligono("20", "a pallettoni", "pompa");

el1.enumera();
el2.enumera();
el3.enumera();
el4.enumera();
el5.enumera();
el6.enumera();

