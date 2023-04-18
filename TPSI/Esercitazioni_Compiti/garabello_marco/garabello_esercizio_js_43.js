class Poligono {
    constructor (l,v,k) {
        this.lato = l;
        this.valore = v;
        this.apotema = v*k;
    }

    perimetro() {return this.lato*this.valore }
    area() {return (this.perimetro() * this.apotema)/2}
}


class Triangolo extends Poligono {
    constructor(l,v) {
        super(l,v,0.289);
        this.h = Math.sqrt((v**2)-((v/2)**2));
    }
    area() {return (this.valore*this.h)/2}
}

class Quadrato extends Poligono {
    constructor(l,v) {
        super(l,v,0.5);
    }
    area() {return this.valore**2}
}

class Pentagono extends Poligono {
    constructor(l,v) {
        super(l,v,0.688);
    }
}

class Esagono extends Poligono {
    constructor(l,v) {
        super(l,v,0.866);
    }
}

class Ettagono extends Poligono {
    constructor(l,v) {
        super(l,v,1.038);
    }
}

class Ottagono extends Poligono {
    constructor(l,v) {
        super(l,v,1.207);
    }
}

let triangolo = new Triangolo(3,15);
let quadrato = new Quadrato(4,10);
let pentagono = new Pentagono(5,21);
let esagono = new Esagono(6,18);
let ettagono = new Ettagono(7,9);
let ottagono = new Ottagono(8,12);


console.log("triangolo");
console.log(triangolo.perimetro());
console.log(triangolo.area());

console.log("quadrato");
console.log(quadrato.perimetro());
console.log(quadrato.area());

console.log("pentagono");
console.log(pentagono.perimetro());
console.log(pentagono.area());

console.log("esagono");
console.log(esagono.perimetro());
console.log(esagono.area());

console.log("ettagono");
console.log(ettagono.perimetro());
console.log(ettagono.area())

console.log("ottagono");
console.log(ottagono.perimetro());
console.log(ottagono.area())


