class Poligono {
    constructor(lunghezza, numLati) {
      this.lunghezza = lunghezza;
      this.numLati = numLati;
    }
  
    Perimetro() {
      return this.lunghezza * this.numLati;
    }
  
    Area() {
      let apotema = this.lunghezza / (2 * Math.tan(Math.PI / this.numLati));
      return 0.5 * apotema * this.Perimetro();
    }
  }

  let triangolo = new Poligono(15, 3);
console.log("Perimetro del triangolo equilatero: " + triangolo.Perimetro() + "cm");
console.log("Area del triangolo equilatero: " + triangolo.Area() + "cm^2");

let quadrato = new Poligono(10, 4);
console.log("Perimetro del quadrato: " + quadrato.Perimetro() + "cm");
console.log("Area del quadrato: " + quadrato.Area() + "cm^2");

let pentagono = new Poligono(21, 5);
console.log("Perimetro del pentagono: " + pentagono.Perimetro() + "cm");
console.log("Area del pentagono: " + pentagono.Area() + "cm^2");

let esagono = new Poligono(18, 6);
console.log("Perimetro dell'esagono: " + esagono.Perimetro() + "cm");
console.log("Area dell'esagono: " + esagono.Area() + "cm^2");

let ettagono = new Poligono(9, 7);
console.log("Perimetro dell'ettagono: " + ettagono.Perimetro() + "cm");
console.log("Area dell'ettagono: " + ettagono.Area() + "cm^2");

let ottagono = new Poligono(12, 8);
console.log("Perimetro dell'ottagono: " + ottagono.Perimetro() + "cm");
console.log("Area dell'ottagono: " + ottagono.Area() + "cm^2");
