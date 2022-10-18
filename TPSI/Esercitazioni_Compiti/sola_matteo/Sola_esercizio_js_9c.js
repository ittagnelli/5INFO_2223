let Animale = function(genere, peso, altezza) {
    (this.genere = genere),
    (this.peso = peso),
    (this.altezza = altezza),
    (this.printGenere = function(){
        console.log(`\nIl genere dell'animale e' ${this.genere}`)
    }),
    (this.printPeso = function(){
        console.log(`Il peso dell'animale e' ${this.peso}`)
    }),
    (this.printAltezza = function(){
        console.log(`L'altezza dell'animale e' ${this.altezza}`)
    }),
    (this.enumera = enumera)
}

let Automobile = function(colore, tipo, cilindrata) {
    (this.colore = colore),
    (this.tipo = tipo),
    (this.cilindrata = cilindrata),
    (this.printColore = function(){
        console.log(`\nIl colore della macchina e' ${this.colore}`)
    }),
    (this.printTipo = function(){
        console.log(`Il tipo della macchina e' ${this.tipo}`)
    }),
    (this.printCilindrata = function(){
        console.log(`La cilindrata della macchina e' ${this.cilindrata}`)
    }),
    (this.enumera = enumera)
}

let Poligono = function(categoria, forma, numero_lati) {
    (this.categoria = categoria),
    (this.forma = forma),
    (this.numero_lati = numero_lati),
    (this.printCategoria = function(){
        console.log(`\nLa categoria del poligono e' ${this.categoria}`)
    }),
    (this.printForma = function(){
        console.log(`La forma del poligono e' ${this.forma}`)
    }),
    (this.printNumeroLati = function(){
        console.log(`Il numero dei lati del poligono e' ${this.numero_lati}`)
    }),
    (this.enumera = enumera)
}

let enumera = function(){
    for(let key of Object.keys(this))(
        console.log(`La chiave è' ${key}`)
    )
}

let animali = [];
let automobili = [];
let poligoni = [];

let genere = ["mammifero", "volatile", "pesce"]
let peso = ["100", "110", "120"]
let altezza = [150, 160, 170]

let colore = ["rosso", "verde", "giallo"]
let tipo = ["berlina", "sportiva", "spider"]
let cilindrata = [1400, 1300, 1200]

let categoria = ["pentagono", "esagono", "ottagono"]
let forma = ["pentagonale", "esagonale", "ottagonale"]
let numero_lati = [5, 6, 8]

for(let i = 0; i < genere.length; i++){
        let new_animale = new Animale(genere[i], peso[i], altezza[i]); 
        animali.push(new_animale);
    }

for(let animale of animali){
    animale.printGenere();
    animale.printPeso();
    animale.printAltezza();
    animale.enumera();
}

for(let i = 0; i < colore.length; i++){
    let new_automobile = new Automobile(colore[i], tipo[i], cilindrata[i]); 
    automobili.push(new_automobile);
}

for(let automobile of automobili){
    automobile.printColore();
    automobile.printTipo();
    automobile.printCilindrata();
    automobile.enumera();
}

for(let i = 0; i < categoria.length; i++){
    let new_poligono = new Poligono(categoria[i], forma[i], numero_lati[i]); 
    poligoni.push(new_poligono);
}

for(let poligono of poligoni){
    poligono.printCategoria();
    poligono.printForma();
    poligono.printNumeroLati();
    poligono.enumera();
}
