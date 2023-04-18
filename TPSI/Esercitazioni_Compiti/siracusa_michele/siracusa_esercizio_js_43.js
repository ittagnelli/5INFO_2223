class Poligono {
    constructor(lunghezza, numero_lati) {
      this.lunghezza = lunghezza;
      this.numero_lati = numero_lati;
    }
  
    Perimetro() {
      return this.lunghezza * this.numero_lati;
    }
  
    Area() {
      let area = this.lunghezza / (2 * Math.tan(Math.PI / this.numero_lati));
      return 0.5 * area * this.Perimetro();
    }
  }

let triangolo = new Poligono(15, 3);
console.log("Il perimetro del triangolo equilatero è: " + triangolo.Perimetro() + "cm");
console.log("L'area del triangolo equilatero è: " + triangolo.Area() + "cm^2");

let quadrato = new Poligono(10, 4);
console.log("Il perimetro del quadrato è: " + quadrato.Perimetro() + "cm");
console.log("L'area del quadrato è: " + quadrato.Area() + "cm^2");

let pentagono = new Poligono(21, 5);
console.log("Il perimetro del pentagono è: " + pentagono.Perimetro() + "cm");
console.log("Area del pentagono è: " + pentagono.Area() + "cm^2");

let esagono = new Poligono(18, 6);
console.log("Il perimetro dell'esagono è: " + esagono.Perimetro() + "cm");
console.log("Area dell'esagono è: " + esagono.Area() + "cm^2");

let ettagono = new Poligono(9, 7);
console.log("Il perimetro dell'ettagono è: " + ettagono.Perimetro() + "cm");
console.log("L'area dell'ettagono è: " + ettagono.Area() + "cm^2");

let ottagono = new Poligono(12, 8);
console.log("Il perimetro dell'ottagono è: " + ottagono.Perimetro() + "cm");
console.log("L'area dell'ottagono è: " + ottagono.Area() + "cm^2");


