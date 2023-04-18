class Poligono{
    constructor(numero_lati, nf, lunghezza_lato){
        this.numero_lati = numero_lati;
        this.lunghezza_lato = lunghezza_lato;
        this.apotema = lunghezza_lato*nf;
    }
    perimetro(){
        return this.lunghezza_lato*this.numero_lati;
    }
    area(){
        return this.lunghezza_lato*this.apotema/2*this.numero_lati;
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
        return (this.lunghezza_lato*this.altezza)/2
    }
}
class Pentagono extends Poligono{
    constructor(lunghezza_lato){
        super(5,0.688, lunghezza_lato );
    }
}
class Esagono extends Poligono{
    constructor(lunghezza_lato){
        super(6,0.866, lunghezza_lato );
    }
}

class Ettagono extends Poligono{
    constructor(lunghezza_lato){
        super(7,1.038, lunghezza_lato );
    }
}
class Ottagono extends Poligono{
    constructor(lunghezza_lato){
        super(8,1.207, lunghezza_lato );
    }
}



let pentagono = new Pentagono(21);
let esagono  = new Esagono(18);
let ettagono = new Ettagono(9);
let ottagono = new Ottagono(12);
let quadrato = new Quadrato(10);
let triangolo = new Triangolo(15,2);

console.log(`Quadrato di lato 10 cm:
area: ${quadrato.area()}
perimetro: ${quadrato.perimetro()}`);
console.log(`Triangolo di lato 15 cm:
area: ${triangolo.area()}
perimetro: ${triangolo.perimetro()}`);
console.log(`Pentagono di lato 21 cm:
area: ${pentagono.area()}
perimetro: ${pentagono.perimetro()}`);
console.log(`Esagono di lato 18 cm:
area: ${esagono.area()}
perimetro: ${esagono.perimetro()}`);
console.log(`Ettagono di lato 9 cm:
area: ${ettagono.area()}
perimetro: ${ettagono.perimetro()}`);
console.log(`Ettagono di lato 12 cm:
area: ${ottagono.area()}
perimetro: ${ottagono.perimetro()}`);