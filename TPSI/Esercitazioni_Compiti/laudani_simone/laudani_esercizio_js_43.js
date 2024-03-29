class Poligono {
    constructor(nlati, lunghezza) {
      this.nlati = nlati;
      this.lunghezza = lunghezza;
    }
    
    perimetro() {
      let perimetro = this.nlati * this.lunghezza;
      return perimetro;
    }
    
    area() {
      let apotema = this.nlati * 0.29;
      let perimetro = this.perimetro();
      let area = (perimetro * apotema) / 2;
      return area;
    }
}

class Quadrato extends Poligono {
    constructor(nlati, lunghezza) {
      super();
      this.nlati = nlati;
      this.lunghezza = lunghezza;
    }
    perimetro() {
      let perimetro = this.nlati ** 2;
      return perimetro;
    }
    area() {
      let area = (this.nlati * 2);
      return area;
    }
}

let poligono = new Poligono(4, 10);
console.log(poligono.perimetro());
console.log(poligono.area());

let quadrato = new Quadrato(4, 5);
console.log("perimetro quadrato: " + quadrato.perimetro());
console.log("area quadrato: " + quadrato.area());