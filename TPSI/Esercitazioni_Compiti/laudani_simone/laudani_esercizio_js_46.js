class Automobile{
  constructor(m, mod, l, c, ci){
      this.marca = m;
      this.modello = mod;
      this.lunghezza = l;
      this.colore = c;
      this.cilindrata = ci;
  }
  get colore(){return this._colore;}
  set colore(c){this._colore = c;}
  stampa(){
      console.log(`L'auto di marca ${this.marca} e modello ${this.modello} lunga ${this.lunghezza}, e di colore ${this.colore} ha cilindrata ${this.cilindrata}`);
  }
  get cilindrata(){return this._cilindrata;}
  set cilindrata(ci){this._cilindrata = ci;}

}
let auto1 = new Automobile("Fiat", "Punto", 4, "Rosso", 1400);
let auto2 = new Automobile("Ford", "Fiesta", 4.10, "Nero", 1200);
let auto3 = new Automobile("Volkswagen", "Golf", 4.20, "Grigio", 1600);
let auto4 = new Automobile("Renault", "Twingo", 3.50, "Verde", 1100);
let auto5 = new Automobile("Peugeot", "208", 4.10, "Bianco", 1200);

auto1.colore = "Blu";
auto1.cilindrata = 1000;
auto1.stampa();

auto2.colore = "Giallo";
auto2.cilindrata = 1400;
auto2.stampa();

auto3.colore = "Arancione";
auto3.cilindrata = 2000;
auto3.stampa();

auto4.colore = "Nero";
auto4.cilindrata = 900;
auto4.stampa();

auto5.colore = "Rosso";
auto5.cilindrata = 1600;
auto5.stampa();