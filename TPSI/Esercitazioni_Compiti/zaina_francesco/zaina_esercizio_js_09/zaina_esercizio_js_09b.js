let Automobile = function(targa, cilindrata, prezzo, peso, marca ){ //inizializzo costruttore
    (this.targa = targa), //inizializzo variabile del costruttore
    (this.cilindrata = cilindrata),
    (this.prezzo = prezzo),
    (this.peso = peso),
    (this.marca = marca),
    (this.stamptarga = function(){  //inizializzo metodo del costruttore
        console.log(`la targa è ${this.targa}`);
    }),
    (this.stampcilindrata = function(){
        console.log(`la cilindrata è ${this.cilindrata}`);
    }),
    (this.stampprezzo = function(){
        console.log(`la prezzo è ${this.prezzo}`);
    })
}

let automobile1 = new Automobile("erftgyhuj", "56", "12000", "678", "toyota");  //definisco l'oggetto
let automobile2 = new Automobile("tgyjnrrtr", "87", "21000", "878", "citroen");
let automobile3 = new Automobile("gbyguugug", "77", "45000", "890", "fiat");
let automobile4 = new Automobile("thyjuurtr", "99", "217i0", "998", "ferrari");
let automobile5 = new Automobile("gbjhjrrtr", "67", "26780", "898", "nisssan");

automobile1.stamptarga(); //chiamate al metodo
automobile1.stampcilindrata();
automobile1.stampprezzo();

automobile2.stamptarga();
automobile2.stampcilindrata();
automobile2.stampprezzo();

automobile3.stamptarga();
automobile3.stampcilindrata();
automobile3.stampprezzo();