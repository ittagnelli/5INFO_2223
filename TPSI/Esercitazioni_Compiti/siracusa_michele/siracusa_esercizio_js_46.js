class Automobile {
    constructor(marca, modello, anno, colore, prezzo) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
      this.colore = colore;
      this.prezzo = prezzo;
    }
  
    descrizione() {
      return `Questa automobile è una ${this.marca} ${this.modello} del ${this.anno} di colore ${this.colore} al prezzo di ${this.prezzo} euro.`;
    }
  
    aumentaPrezzo(percentuale) {
      this.prezzo = this.prezzo * (1 + percentuale / 100);
    }
  
    cambiaColore(nuovoColore) {
      this.colore = nuovoColore;
    }
  }
  
  //Creo 5 oggetti di tipo Automobile
  const auto1 = new Automobile("Fiat", "Panda", 2010, "blu", 5000);
  const auto2 = new Automobile("Ford", "Fiesta", 2015, "grigio", 8000);
  const auto3 = new Automobile("Renault", "Clio", 2018, "rosso", 12000);
  const auto4 = new Automobile("Toyota", "Yaris", 2016, "bianco", 10000);
  const auto5 = new Automobile("Volkswagen", "Golf", 2020, "nero", 20000);
  
  //Richiamo i metodi per ogni oggetto
  console.log(auto1.descrizione());
  auto1.aumentaPrezzo(10);
  console.log(auto1.descrizione());
  auto1.cambiaColore("verde");
  console.log(auto1.descrizione());
  
  console.log(auto2.descrizione());
  auto2.aumentaPrezzo(5);
  console.log(auto2.descrizione());
  auto2.cambiaColore("arancione");
  console.log(auto2.descrizione());
  
  console.log(auto3.descrizione());
  auto3.aumentaPrezzo(3);
  console.log(auto3.descrizione());
  auto3.cambiaColore("blu scuro");
  console.log(auto3.descrizione());
  
  console.log(auto4.descrizione());
  auto4.aumentaPrezzo(8);
  console.log(auto4.descrizione());
  auto4.cambiaColore("argento");
  console.log(auto4.descrizione());
  
  console.log(auto5.descrizione());
  auto5.aumentaPrezzo(15);
  console.log(auto5.descrizione());
  auto5.cambiaColore("grigio scuro");
  console.log(auto5.descrizione());
  
