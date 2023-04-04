class Quadrato {
    constructor(l) {
        this.lato = l; //lato è un attributo della classe Qaudrato
    }

    set lato(val) { this._lato = val; }

    //non esiste un attributo dell'oggetto chiamato area
    // questa è una pseudo proprietà
    get area() { return this._lato ** 2; } 
    get perimetro() { return this._lato *4; }
}

q = new Quadrato(5);
console.log(q.area);
console.log(q.perimetro);
