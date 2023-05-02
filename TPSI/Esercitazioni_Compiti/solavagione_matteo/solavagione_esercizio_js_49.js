class Fibonacci{
    Calcola(n){
        if(n<=1)
            return n;
        else
            return this.Calcola(n-1) + this.Calcola(n-2);
    }
}
let ennesimo = new Fibonacci();
console.log(ennesimo.Calcola(7));
console.log(ennesimo.Calcola(13));
console.log(ennesimo.Calcola(4));
console.log(ennesimo.Calcola(1));
console.log(ennesimo.Calcola(20));