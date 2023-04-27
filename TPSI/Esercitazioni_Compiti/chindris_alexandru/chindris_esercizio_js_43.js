class Poligono {
    constructor(lunghezza, nLati, numero_fisso){
        this.lunghezza = lunghezza;
        this.nLati= nLati;
        this.apotema= numero_fisso * this.lunghezza;
    }

    perimetro(){
        return this.lunghezza * this.nLati;
    }

    area(){
        return (this.perimetro()/2)*this.apotema;
    }
}

class Triangolo extends Poligono {
    constructor(nLati) {
        super(3,nLati,0.289);
        this.altezza = Math.sqrt((nLati**2)-((nLati/2)**2));
    }
    area() {return (this.nLati*this.altezza)/2}
}

class Quadrato extends Poligono {
    constructor(nLati) {
        super(4,nLati,0.5);
    }
    area() {return this.nLati**2}
}

class Pentagono extends Poligono {
    constructor(nLati) {
        super(5,nLati,0.688);
    }
}

class Esagono extends Poligono {
    constructor(nLati) {
        super(6,nLati,0.866);
    }
}

class Ettagono extends Poligono {
    constructor(nLati) {
        super(7,nLati,1.038);
    }
}

class Ottagono extends Poligono {
    constructor(nLati) {
        super(8,nLati,1.207);
    }
}

//MAIN
let triangolo = new Triangolo(15);
console.log(`Perimetro del triangolo: ${triangolo.perimetro()}`);
console.log(`Perimetro del tringolo: ${triangolo.area()}`);

let quadrato = new Quadrato(10);
console.log(`Perimetro del quadrato: ${quadrato.perimetro()}`);
console.log(`Perimetro del quadrato: ${quadrato.area()}`);

let pentagono = new Pentagono(21);
console.log(`Perimetro del pentagono: ${pentagono.perimetro()}`);
console.log(`Perimetro del pentagono: ${pentagono.area()}`);

let esagono = new Esagono(18);
console.log(`Perimetro del esagono : ${esagono.perimetro()}`);
console.log(`Perimetro del esagono: ${esagono.area()}`);

let ettagono = new Ettagono(9);
console.log(`Perimetro del ettagono: ${ettagono.perimetro()}`);
console.log(`Perimetro del ettagono: ${ettagono.area()}`);

let ottagono = new Ottagono(12);
console.log(`Perimetro del ottagono: ${ottagono.perimetro()}`);
console.log(`Area del ottagono: ${ottagono.area()}`);