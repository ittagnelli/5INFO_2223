class Quadrato {
    constructor(l) {
        this.lato = l;
    }

    set lato(val) { this._lato = val; }

   
    get area() { return this._lato ** 2; } 

    get perimetro() {return this._lato * 4;}
}

function quadrato(){
q = new Quadrato(5);
console.log("il perimetro del quadrato vale: ", q.perimetro);
console.log("l'area del quadrato vale: ", q.area);
let quad = document.getElementById("quadrato");
let lato = document.getElementById("lato").value;
quad.style.width = lato + "px";
quad.style.height = lato + "px";
quad.style.border = "1px solid black";
quad.style.backgroundColor = "red";



}