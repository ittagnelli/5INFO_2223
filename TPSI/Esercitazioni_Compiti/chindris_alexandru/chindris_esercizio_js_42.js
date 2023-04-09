class Calcolatrice {
    constructor (n) {
        this._n = n;
    }

    set n (n){
        this._n = n;
    }

    get n (){
        return this._n;
    }

    somma (nx) { this.n = this.n +nx; return this;}
    sottrazione(nx) { this.n = this.n - nx; return this;}
    moltiplicazione (nx) { this.n = this.n * nx; return this;}
    divisione (nx) { this.n = this.n / nx; return this;}

}

let op2 = new Calcolatrice(6);
console.log(op2.sottrazione(2).moltiplicazione(5).somma(8).divisione(4));

let op3 = new Calcolatrice(11);
console.log(op3.moltiplicazione(3).somma(5).sottrazione(5).divisione(11));

let op1 = new Calcolatrice(29);
console.log(op1.somma(2).sottrazione(7).divisione(3).divisione(2).somma(1).moltiplicazione(2));
