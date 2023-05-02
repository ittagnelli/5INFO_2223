class Poligono {
    constructor(nlati, l) {
        this.l = "13";
        this.nlati = "4"
    }

perimetro(){ 
let perimetro = this.nlati*this.l;
  return perimetro;
}

area(){
let apotema = this.nlati * 20;
let perimetro = this.perimetro();
let area = (perimetro * apotema)/2;
return area;
}

}
class Quadrato extends Poligono(){
super();


}


let poligono = new Poligono();
console.log(poligono.perimetro());
console.log(poligono.area());
