class Poligono{
    constructor(numero_lati, variabile, lunghezza_lato, apotema, altezza){
       this.numero_lati = numero_lati;
        this.lunghezza_lato = lunghezza_lato;
        this.apotema = lunghezza_lato*variabile;
        this.altezza = altezza;
    }


    area(){
        return this.lunghezza_lato*(this.apotema/2)*this.numero_lati;
    }

    perimetro(){
        return this.numero_lati * this.lunghezza_lato;
    }
}

class Quadrato extends Poligono{
    constructor(lunghezza_lato){
        super(4,0,lunghezza_lato);
    }
    area(){
        return this.lunghezza_lato*this.lunghezza_lato;
    }
}

class Triangolo extends Poligono{
    constructor(lunghezza_lato, altezza){
        super(3,0,lunghezza_lato);
        this.altezza = altezza;
    }
    area(){
        return (this.lunghezza_lato*this.altezza)/2;
    }
}


class Pentagono extends Poligono{
    constructor(lunghezza_lato){
        super(5,0.688,lunghezza_lato);
}
}

class Esagono extends Poligono{
    constructor(lunghezza_lato){
        super(6,0.866,lunghezza_lato);
    }
}

class Ettagono extends Poligono{
    constructor(lunghezza_lato){
        super(7,1.038,lunghezza_lato);
    }
}

class Ottagono extends Poligono{
    constructor(lunghezza_lato){
        super(8,1.207,lunghezza_lato);
    }
}


let pentagono = new Pentagono(3);
let esagono  = new Esagono(5);
let ettagono = new Ettagono(7);
let ottagono = new Ottagono(12);
let quadrato = new Quadrato(10);
let triangolo = new Triangolo(8,4);

console.log(`Quadrato di lato 10 cm:
area: ${quadrato.area()}
perimetro: ${quadrato.perimetro()}`);

console.log(`Triangolo di lato 8 cm:
area: ${triangolo.area()}
perimetro: ${triangolo.perimetro()}`);

console.log(`Pentagono di lato 3 cm:
area: ${pentagono.area()}
perimetro: ${pentagono.perimetro()}`);

console.log(`Esagono di lato 5 cm:
area: ${esagono.area()}
perimetro: ${esagono.perimetro()}`);

console.log(`Ettagono di lato 7 cm:
area: ${ettagono.area()}
perimetro: ${ettagono.perimetro()}`);

console.log(`Ottagono di lato 12 cm:
area: ${ottagono.area()}
perimetro: ${ottagono.perimetro()}`);
