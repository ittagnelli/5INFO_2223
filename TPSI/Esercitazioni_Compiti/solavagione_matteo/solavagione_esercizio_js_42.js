class Calcolatrice {
    somma(n){
        this._n1 = this._n1 + n;
        return (this);
    }

    sottr(n){
        this._n1 = this._n1 - n;
        return (this);
    }

    div(n){
        this._n1 = this._n1 / n;
        return (this);
    }

    molt(n){
        this._n1 = this._n1 * n;
        return (this);
    }

    set n1(num) {
        this._n1 = num;
    }
    get n1() {
        return this._n1;
    }

  
}

let calcola = new Calcolatrice();
calcola._n1 = 5;
console.log(calcola.somma(3).sottr(2).somma(4).molt(5).sottr(2).div(2).n1);

calcola._n1 = 6;
console.log(calcola.sottr(2).molt(5).somma(8).div(4).n1);

calcola._n1 = 11;
console.log(calcola.molt(3).somma(5).sottr(5).div(11).n1);

calcola._n1 = 29;
console.log(calcola.somma(2).sottr(7).div(3).div(2).somma(1).molt(2).n1); 


