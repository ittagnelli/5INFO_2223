let Automobile = function(targa, cilindrata, prezzo, peso, marca ){ 
    (this.targa = targa), 
    (this.cilindrata = cilindrata),
    (this.prezzo = prezzo),
    (this.peso = peso),
    (this.marca = marca),
    (this.stamptarga = function(){ 
        console.log(`la targa è ${this.targa}`);
    }),
    (this.stampcilindrata = function(){
        console.log(`la cilindrata è ${this.cilindrata}`);
    }),
    (this.stampprezzo = function(){
        console.log(`la prezzo è ${this.prezzo}`);
    })
}

let automobile1 = new Automobile("abc", "10", "16000", "678", "ferrari");  //definisco l'oggetto
let automobile2 = new Automobile("efg", "87", "47000", "878", "audi");
let automobile3 = new Automobile("hil", "46", "23000", "890", "fiat");
let automobile4 = new Automobile("mno", "34", "10000", "998", "lamborghini");
let automobile5 = new Automobile("pqr", "98", "20000", "898", "land rover");

automobile1.stamptarga(); 
automobile1.stampcilindrata();
automobile1.stampprezzo();

automobile2.stamptarga();
automobile2.stampcilindrata();
automobile2.stampprezzo();

automobile3.stamptarga();
automobile3.stampcilindrata();
automobile3.stampprezzo();