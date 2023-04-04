class Quadrato {
    constructor(l) {
        this.lato = l; //lato è un attributo della classe Qaudrato
    }

    set lato(val) { this._lato = val; }

    //non esiste un attributo dell'oggetto chiamato area
    // questa è una pseudo proprietà
    get area() { return this._lato ** 2; } 

    get perim() { return this._lato*4; }
}

function calcola(){
    let lato = document.getElementById("num").value;
    let dis_quad = document.getElementById("quad");

    console.log(dis_quad);
    console.log(lato);

    quad = new Quadrato(lato);

    console.log(quad.perim);

    console.log(quad.area);
    
    dis_quad.style.width = lato+"px";
    dis_quad.style.height = lato+"px";
    dis_quad.style.backgroundColor = "black";

}