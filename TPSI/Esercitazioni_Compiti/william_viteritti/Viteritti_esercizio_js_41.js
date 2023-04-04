class Quadrato {
    constructor(l){
        this.lato = l;
    }

    set lato(val){this._lato = val;}
    get area(){return this._lato ** 2;}
    get perimetro(){return this._lato ** 4;}
}

Q = new Quadrato(5);
console.log(Q.perimetro);
alert(Q.area);
