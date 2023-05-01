//Classe Animale
class Animale {
    constructor(nome, specie, habitat) {
      this.nome = nome;
      this.specie = specie;
      this.habitat = habitat;
    }
  
    emettiVerso() {
      console.log(`${this.nome} emette un verso.`);
    }
  
    sposta() {
      console.log(`${this.nome} si sposta.`);
    }
  
    enumera() {
      for (let attr in this) {
        console.log(attr);
      }
    }
  }
  
  //Classe Automobile
  class Automobile {
    constructor(modello, marca, colore) {
      this.modello = modello;
      this.marca = marca;
      this.colore = colore;
    }
  
    accelera() {
      console.log(`L'automobile ${this.marca} ${this.modello} accelera.`);
    }
  
    frena() {
      console.log(`L'automobile ${this.marca} ${this.modello} frena.`);
    }
  
    enumera() {
      for (let attr in this) {
        console.log(attr);
      }
    }
  }
  
  //Classe Poligono
  class Poligono {
    constructor(lati, lunghezzaLato, angoliInterni) {
      this.lati = lati;
      this.lunghezzaLato = lunghezzaLato;
      this.angoliInterni = angoliInterni;
    }
  
    calcolaPerimetro() {
      console.log(`Il perimetro del poligono è ${this.lati * this.lunghezzaLato}.`);
    }
  
    calcolaArea() {
      console.log(`L'area del poligono è ${this.lati * this.lunghezzaLato * this.lunghezzaLato / (4 * Math.tan(Math.PI / this.lati))}.`);
    }
  
    enumera() {
      for (let attr in this) {
        console.log(attr);
      }
    }
  }
  
  //Creo 2 oggetti per ogni classe
  const leone = new Animale('Leone', 'Felino', 'Savana');
  const elefante = new Animale('Elefante', 'Proboscidato', 'Foresta');
  const ferrari = new Automobile('F8 Tributo', 'Ferrari', 'Rosso');
  const lambo = new Automobile('Huracan', 'Lamborghini', 'Giallo');
  const quadrato = new Poligono(4, 5, 90);
  const pentagono = new Poligono(5, 4, 108);
  
  //Chiamo il metodo enumera() su ogni oggetto
  leone.enumera();
  elefante.enumera();
  ferrari.enumera();
  lambo.enumera();
  quadrato.enumera();
  pentagono.enumera();
  