class Calcolatrice{
    somma(n){
        this._n1 = this._n1 + n;
        return (this);
    }
    prodotto(n){
        this._n1 = this._n1 * n;
        return (this);
    }
    divisione(n){
        this._n1 = this._n1 / n;
        return (this);
    }
    sottrazione(n){
        this._n1 = this._n1 - n;
        return (this);
    }
    set n1(value){ this._n1 = value}
    get n1(){ return this._n1}
}

let calcolo = new Calcolatrice();
calcolo.n1 = 5;
console.log(calcolo.somma(3).sottrazione(2).somma(4).prodotto(5).sottrazione(2).divisione(2).n1);

calcolo.n1 = 6;
console.log(calcolo.sottrazione(2).prodotto(5).somma(8).divisione(4).n1);

calcolo.n1 = 11;
console.log(calcolo.prodotto(3).somma(5).sottrazione(5).divisione(11).n1);

calcolo.n1 = 29;
console.log(calcolo.somma(2).sottrazione(7).divisione(3).divisione(2).somma(1).prodotto(2).n1);