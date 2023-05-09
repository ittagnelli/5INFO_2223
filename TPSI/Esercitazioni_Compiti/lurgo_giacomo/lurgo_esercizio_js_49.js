class fibonacci{
    calcola(n){
        return(+n == 0 || +n == 1) ? 1 : (this.calcola(n-1) + this.calcola(n-2));
    }
}

let sec = new fibonacci();

console.log(sec.calcola(5));
console.log(sec.calcola(4));
console.log(sec.calcola(3));
console.log(sec.calcola(2));
console.log(sec.calcola(1));