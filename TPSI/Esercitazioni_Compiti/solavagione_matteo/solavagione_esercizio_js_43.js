class Poligono {
    constructor(l, n, nf) { //l = lunghezza del lato, n=numero dei lati, nf=numero fisso
        this.l = l;
        this.n = n;
        this.nf = nf;
    }

    Perimetro() {
        return this.l * this.n;
    }

    Area() {
        return ((this.l * this.n) * (this.l * this.nf)) / 2;
    }
}

class Triangolo extends Poligono {
    constructor(){
        super(); 
        this.l = 15;
        this.n = 3;
        this.nf = 0.289;
    }
}

class Quadrato extends Poligono {
    constructor(){
        super(); 
        this.l = 10;
        this.n = 4;
        this.nf = 0.5;
    }

    Area() {
        return this.l * this.l;
    }
}

class Pentagono extends Poligono {
    constructor(){
        super(); 
        this.l = 21;
        this.n = 5;
        this.nf = 0.688;
    }
}

class Esagono extends Poligono {
    constructor(){
        super(); 
        this.l = 18;
        this.n = 6;
        this.nf = 0.866;
    }
}

class Ettagono extends Poligono {
    constructor(){
        super(); 
        this.l = 9;
        this.n = 7;
        this.nf = 1.038;
    }
}

class Ottagono extends Poligono {
    constructor(){
        super(); 
        this.l = 12;
        this.n = 8;
        this.nf = 1.207;
    }
}




let triang = new Triangolo();
console.log("il perimetro dell'triangolo vale: ", triang.Perimetro());
console.log("l'area dell'triangolo vale: ", triang.Area());

let quad = new Quadrato();
console.log("\nil perimetro dell'quad vale: ", quad.Perimetro());
console.log("l'area dell'quad vale: ", quad.Area());

let pent = new Pentagono();
console.log("\nil perimetro dell'pentagono vale: ", pent.Perimetro());
console.log("l'area dell'pentagono vale: ", pent.Area());

let esag = new Esagono();
console.log("\nil perimetro dell'esagono vale: ", esag.Perimetro());
console.log("l'area dell'esagono vale: ", esag.Area());

let ett = new Ettagono();
console.log("\nil perimetro dell'ettagono vale: ", ett.Perimetro());
console.log("l'area dell'ettagono vale: ", ett.Area());

let ott = new Ottagono();
console.log("\nil perimetro dell'ottagono vale: ", ott.Perimetro());
console.log("l'area dellettagono vale: ", ott.Area());


