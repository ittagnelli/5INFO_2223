class Poligono {
    constructor(lun, n, f){
        this.lunghezza=lun;
        this.num_lati=n;
        this.num_fisso=f;
        //3	-> 0.28867
        //4	-> 0.5
        //5-> 0.68819	
        //6-> 0.86602	
        //7	-> 1.03826	
        //8	-> 1.20710	
        //9 -> 1.37373	
        //10 -> 1.53884
    }

    Perimetro(){
        console.log("il perimetro della figura vale: ", this.lunghezza*this.num_lati);
    }

    Quadrato(lun){
        console.log(("L'area vale: ", lun**lun))
    }

}

class Triangolo extends Poligono{
    constructor(){
        super(10, 3, 0.28867);
    }
    Area(){
        console.log("L'area vale: ", (1/2*this.lunghezza*this.num_fisso));
    }
    
}

class Quadrato extends Poligono{
    constructor(){
        super(12, 4);
    }
    Area(){
        console.log("L'area vale: ", (this.lunghezza**2));
    }
}





let tri = new Triangolo();
tri.Area();
let qua = new Quadrato();
qua.Area();
qua.Perimetro();
