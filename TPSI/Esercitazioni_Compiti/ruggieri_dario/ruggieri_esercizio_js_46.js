class Automobile{
    constructor(marca, modello, lunghezza, colore, cilindrata){
        this.marca = marca;
        this.modello = modello;
        this.lunghezza = lunghezza;
        this.colore = colore;
        this.cilindrata = cilindrata;
    }
    get colore(){return this._colore;}
    set colore(colore){this._colore = colore;}
    stampa(){
        console.log(`La macchina di marca ${this.marca} e modello ${this.modello} lunga ${this.lunghezza}, e di colore ${this.colore} ha cilindrata ${this.cilindrata}`);
    }
    get cilindrata(){return this._cilindrata;}
    set cilindrata(cilindrata){this._cilindrata = cilindrata;}

}
let macchina1 = new Automobile("ford", "kuga", 5, "blu", 2000);
let macchina2 = new Automobile("ferrari", "purosangue", 4.50, "rosso", 3000);
let macchina3 = new Automobile("renault", "clio", 4, "verde", 1500);
let macchina4 = new Automobile("alfaromeo", "giulia quadrifoglio", 4.80, "rosso", 2500);
let macchina5 = new Automobile("fiat", "panda", 3.50, "gialla", 1000);

macchina1.colore = "verde";
macchina1.cilindrata = 1000;
macchina1.stampa();

macchina2.colore = "giallo";
macchina2.cilindrata = 3500;
macchina2.stampa();

macchina3.colore = "blu";
macchina3.cilindrata = 1500;
macchina3.stampa();

macchina4.colore = "bianca";
macchina4.cilindrata = 2000;
macchina4.stampa();

macchina5.colore = "nera";
macchina5.cilindrata = 900;
macchina5.stampa();