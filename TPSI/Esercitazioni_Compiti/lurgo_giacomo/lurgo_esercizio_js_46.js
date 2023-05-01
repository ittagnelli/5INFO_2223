class Automobile {
    constructor(marca, modello, anno, cilindrata, colore) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
      this.cilindrata = cilindrata;
      this.colore = colore;
      this.accessori = [];
    }
    
    // Metodo per aggiungere accessori all'automobile
    aggiungiAccessorio(accessorio) {
      this.accessori.push(accessorio);
    }
  
    // Metodo per ottenere la lista di accessori dell'automobile
    getAccessori() {
      return this.accessori;
    }
  
    // Metodo per ottenere una descrizione dell'automobile
    descrizione() {
      return `${this.marca} ${this.modello} del ${this.anno}, ${this.cilindrata} cc, colore ${this.colore}`;
    }
  }
  
// Creazione di 5 istanze della classe Automobile
const automobile1 = new Automobile("Fiat", "Panda", 2022, 900, "Rosso");
const automobile2 = new Automobile("Ford", "Focus", 2021, 1500, "Blu");
const automobile3 = new Automobile("Renault", "Clio", 2020, 1200, "Nero");
const automobile4 = new Automobile("BMW", "Serie 3", 2022, 2000, "Grigio");
const automobile5 = new Automobile("Mercedes", "Classe A", 2021, 1800, "Bianco");

  // Stampa della descrizione dell'automobile
  console.log(automobile1.descrizione());
  console.log(automobile2.descrizione());
  console.log(automobile3.descrizione());
  console.log(automobile4.descrizione());
  console.log(automobile5.descrizione());