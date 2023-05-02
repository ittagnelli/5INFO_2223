class Poligono {
    constructor(num_lati, lunghezza, num_fisso) {
      this.num_lati = num_lati;  
      this.lunghezza = lunghezza;
      this.apotema = lunghezza*num_fisso;
    }
  
    perimetro() {
      return this.lunghezza * this.num_lati;
    }
  
    area() {
        return this.lunghezza*this.num_lati*(this.apotema/2);
    }
}

class Triangolo extends Poligono{
    constructor(lunghezza, altezza){
        super(3,lunghezza,0.3);
        this.altezza = altezza;
    }
    area(){
        return (this.lunghezza*this.altezza)/2
    }
}

class Quadrato extends Poligono{
    constructor(lunghezza){
        super(4,lunghezza,0.5);
    }
    area(){
        return this.lunghezza*this.lunghezza;
    }
}

class Pentagono extends Poligono{
    constructor(lunghezza){
        super(5,lunghezza,0.7);
    }
}

class Esagono extends Poligono{
    constructor(lunghezza){
        super(6,lunghezza,0.9);
    }
}

class Ettagono extends Poligono{
    constructor(lunghezza){
        super(7,lunghezza,1);
    }
}

class Ottagono extends Poligono{
    constructor(lunghezza){
        super(8,lunghezza,1.2);
    }
}

let triangolo = new Triangolo(5,3);
let quadrato = new Quadrato(2);
let pentagono = new Pentagono(4);
let esagono  = new Esagono(6);
let ettagono = new Ettagono(8);
let ottagono = new Ottagono(10);

console.log(`Triangolo\nArea: ${triangolo.area()}\nPerimetro: ${triangolo.perimetro()}`);
console.log(`Quadrato\nArea: ${quadrato.area()}\nPerimetro: ${quadrato.perimetro()}`);
console.log(`Pentagono\nArea: ${pentagono.area()}\nPerimetro: ${pentagono.perimetro()}`);
console.log(`Esagono\nArea: ${esagono.area()}\nPerimetro: ${esagono.perimetro()}`);
console.log(`Ettagono\nArea: ${ettagono.area()}\nPerimetro: ${ettagono.perimetro()}`);
console.log(`Ottagono\nArea: ${ottagono.area()}\nPerimetro: ${ottagono.perimetro()}`);