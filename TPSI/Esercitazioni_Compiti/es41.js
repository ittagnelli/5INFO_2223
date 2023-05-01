
class Quadrato {
    constructor(numero) {
        this.lato = numero; //lato è un attributo della classe Qaudrato
    }

    set lato(val) { this._lato = val; }

    //non esiste un attributo dell'oggetto chiamato area
    // questa è una pseudo proprietà

    get area() { return this._lato ** 2; } 
    get p() { return this._lato * 4; } 

}
function qu(){
let numero = document.getElementById("num");
q = new Quadrato(5);

}

//console.log(q.area); 
//console.log(q.p);
//console.log(numero.value);