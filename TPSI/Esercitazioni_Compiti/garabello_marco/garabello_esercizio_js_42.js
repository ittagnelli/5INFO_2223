class Clac {
    
    constructor () {
        this._prev = 0;
    }

    add (a,b=0) {this._prev += a+b; return this}
    sub (a,b=0) {this._prev = (this._prev ?  this._prev-a-b : a-b); return this}
    mol (a,b=1) {
        this._prev = (this._prev ?  this._prev*a*b : a*b); return this
    }
    div (a,b=1) {this._prev = (this._prev ?  this._prev/a/b : a/b); return this}

    get ris() {return this._prev;}
    reset() {this._prev = 0}
}


let c = new Clac();

console.log(c.sub(6,2).mol(5).add(8).div(4).ris);
c.reset();
console.log(c.mol(11,3).add(5).sub(5).div(11).ris);
c.reset();
console.log(c.add(29,2).sub(7).div(3).div(2).add(1).mol(2).ris);