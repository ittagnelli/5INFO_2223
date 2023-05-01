class Calcolatrice {
    somma(n){
        this._first = this._first + n;
        return (this);
    }

    sottr(n){
        this._first = this._first - n;
        return (this);
    }

    div(n){
        this._first = this._first / n;
        return (this);
    }

    molt(n){
        this._first = this._first * n;
        return (this);
    }

    set first(num) {
        this._first = num;
    }
    get first() {
        return this._first;
    }

  
}

let calcola = new Calcolatrice();
calcola._first = 5;
console.log(calcola.somma(3).sottr(2).somma(4).molt(5).sottr(2).div(2).first);

calcola._first = 6;
console.log(calcola.sottr(2).molt(5).somma(8).div(4).first);

calcola._first = 11;
console.log(calcola.molt(3).somma(5).sottr(5).div(11).first);

calcola._first = 29;
console.log(calcola.somma(2).sottr(7).div(3).div(2).somma(1).molt(2).first); 


