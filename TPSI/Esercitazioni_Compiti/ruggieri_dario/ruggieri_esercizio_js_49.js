class Fibonacci{
    calcolo(n){
        return(+n == 0 || +n == 1) ? 1 : (this.calcolo(n-1) + this.calcolo(n-2));
    }
}

let sequenza = new Fibonacci();

console.log(sequenza.calcolo(5));
console.log(sequenza.calcolo(4));
console.log(sequenza.calcolo(3));
console.log(sequenza.calcolo(2));
console.log(sequenza.calcolo(1));