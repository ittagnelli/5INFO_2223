class Quadrato{
    constructor(l){
        this.lato = l;
    }

    set lato(value) {this._lato =  value;}
    
    get lato() {return this._lato;};
    get area() {return this._lato ** 2;}
    get perimetro() {return this._lato * 4;}

}


function calcola(){
    let lato = document.getElementById("lato");
    let quadrato = new Quadrato(+(lato.value));
    let div = document.createElement('div');
    let p = document.createElement('p');

    div.style.backgroundColor = 'blue';
    div.style.width = `${quadrato.lato*10}px`;
    div.style.height = `${quadrato.lato*10}px`;
    div.style.border = '2px solid black';
    p.innerHTML =  `Area: ${quadrato.area} <br> Perimetro: ${quadrato.perimetro}`;
    document.body.append(div);
    document.body.append(p);
}