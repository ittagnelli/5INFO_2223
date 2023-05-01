// Definizione della classe Animale
class Animale {
    constructor(nome, specie, eta) {
      this.nome = nome;
      this.specie = specie;
      this.eta = eta;
    }
  
    descrizione() {
      return `Sono un ${this.specie} di nome ${this.nome} e ho ${this.eta} anni.`;
    }
  
    emettiSuono() {
      return "Non ho un suono definito.";
    }
  
    enumera() {
      for (let prop in this) {
        console.log(prop);
      }
    }
  }
  
  // Definizione della classe Poligono
  class Poligono {
    constructor(nLati, lunghezzaLati, apotema) {
      this.nLati = nLati;
      this.lunghezzaLati = lunghezzaLati;
      this.apotema = apotema;
    }
  
    perimetro() {
      return `Il perimetro della figura vale: ${this.nLati * this.lunghezzaLati}`;
    }
  
    area() {
      return `L'area della figura vale: ${(this.perimetro() * this.apotema) / 2}`;
    }
  
    enumera() {
      for (let prop in this) {
        console.log(prop);
      }
    }
  }
  
  // Definizione della classe Automobile
  class Automobile {
    constructor(marca, modello, anno) {
      this.marca = marca;
      this.modello = modello;
      this.anno = anno;
    }
  
    descrizione() {
      return `Sono un'automobile ${this.marca} ${this.modello} del ${this.anno}.`;
    }
  
    accelera() {
      return "Sto accelerando...";
    }
  
    enumera() {
      for (let prop in this) {
        console.log(prop);
      }
    }
  }
  
  // Creazione di istanze delle tre classi
  const cane = new Animale("Fido", "cane", 5);
  const gatto = new Animale("Whiskers", "gatto", 2);
  
  const quadrato = new Poligono(4, 5, 3);
  const esagono = new Poligono(6, 4, 2);
  
  const auto1 = new Automobile("Fiat", "Panda", 2022);
  const auto2 = new Automobile("Ford", "Focus", 2021);
  
  // Utilizzo dei metodi delle tre classi, incluso enumera()
  console.log(cane.descrizione());
  console.log(cane.emettiSuono());
  cane.enumera();
  console.log("--------------------------");
  
  console.log(gatto.descrizione());
  console.log(gatto.emettiSuono());
  gatto.enumera();
  console.log("--------------------------");
  
  console.log(quadrato.perimetro());
  console.log(quadrato.area());
  quadrato.enumera();
  console.log("--------------------------");
  
  console.log(esagono.perimetro());
  console.log(esagono.area());
  esagono.enumera();
  console.log("--------------------------");
  
  console.log(auto1.descrizione());
  console.log(auto1.accelera());
  auto1.enumera();
  console.log("--------------------------");
  
  console.log(auto2.descrizione());
  console.log(auto2.accelera());
  auto2.enumera();
  console.log("--------------------------");
  