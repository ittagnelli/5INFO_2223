class Quadrato {
    constructor (lato){
        this.lato = lato;
    }

    set lato (lato) {
        this._lato=lato;
    }

    get lato (){
        return this._lato;
    }

    get perimetro (){
        return this._lato * 4; 
    }

    get area (){
        return this._lato ** 2;
    }
}

function calcola () {
    const lato = document.getElementById(`valueLato`);
    let container = document.getElementById("container");
    let div_in_page = document.createElement("div");
    let ris = document.createElement("div");
    let ris_2 = document.createElement("div");
    let quad = new Quadrato(lato.value);


    div_in_page.style.border= "1px solid black";
    div_in_page.style.height= ""+(quad.lato)*10+"px";
    div_in_page.style.width= ""+(quad.lato)*10+"px";
    ris.innerHTML=`Perimetro: ${quad.perimetro}`;
    ris_2.innerHTML=`Area: ${quad.area}`;

    container.append(div_in_page);
    container.append(ris);
    container.append(ris_2);
}