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

function myFunction(lato){

const body = document.body;
let quad = document.createElement("div");
quad.style.backgroundColor = "blue";
quad.style.width = (lato*10)+"px";
quad.style.height = (lato*10)+"px";
let p1 = document.createElement("p");
let p2 = document.createElement("p");
p1.innerHTML = "Area = "+ q.area;
p2.innerHTML = "Perimetro = "+ q.perimetro;
body.append(quad);
body.append(p1);
body.append(p2);                                                                                                                                                                                                                                                                                                                                                                        
}
