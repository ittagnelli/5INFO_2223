let Animale = function(specie, genere, num_zampe){
    (this.specie = specie),
    (this.genere = genere),
    (this.num_zampe = num_zampe),
    (this.enumera = function(){
        for(let key in Animale){
            console.log(`la chiave ${key} ha valore ${Animale[key]}`);
        }
    }),
    (this.find = function(){
        if(num_zampe == 2){
            console.log(Animale);
        }
    }),
    (this.verifica = function(){
        if(genere == "maschio")
            console.log("sei maschio");
        else
            console.log("sei femmina");
    })
}
let Automobile = function(modello, colore, data){
    (this.modello = modello),
    (this.colore = colore),
    (this.data = data),
    (this.enumera = function(){
        for(let key in Automobile){
            console.log(`la chiave ${key} ha valore ${Automobile[key]}`);
        }
    }),
    (this.stampa = function(){
        console.log(Automobile);
    }),
    (this.col = function(){
        if(colore == "rosso")
            console.log(Automobile);
    })
}
let Poligono = function(nome, lati, tipo){
    (this.nome = nome),
    (this.lati = lati),
    (this.tipo = tipo),
    (this.enumera = function(){
        for(let key in Poligono){
            console.log(`la chiave ${key} ha valore ${Poligono[key]}`);
        }
    }),
    (this.reg = function(){
        if(tipo == "regolare")
            console.log(Poligono);
    }),
    (this.check = function(){
        if(lati == 3)
            console.log("il poligono è un triangolo");
    })
}

let anim1 = new Animale("insetto", "maschio", 2);
let anim2 = new Animale("mammifero", "maschio", 4);
anim1.enumera();
anim2.enumera();

let auto1 = new Automobile("Fiat", "bianco", "4/12/2022");
let auto2 = new Automobile("Bmw", "nero", "9/11/2021");
auto1.enumera();
auto2.enumera();

let p1 = new Poligono("pentagono", 5, "regolare");
let p2 = new Poligono("trapezio", 4, "irregolare");
p1.enumera();
p2.enumera();



