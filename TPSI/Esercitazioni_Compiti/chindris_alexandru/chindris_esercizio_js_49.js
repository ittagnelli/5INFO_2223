class Fibonacci {
    constructor(numero){
        this.numero = numero ; 
    }

    ennesimo (n){
        let tmp = 0; 
        let a=0;
        let b=1
        
        if(n == 0) return 1;
        if(n == 1) return 1;

        for(let x = 2 ; x < n; x++){
            tmp = a;
            a = b ;
            b = tmp + b;
        }
        return b;
    }
}

let numero1 = new Fibonacci();
let numero2 = new Fibonacci();
let numero3 = new Fibonacci();
let numero4 = new Fibonacci();
let numero5 = new Fibonacci();

console.log(numero1.ennesimo(0));
console.log(numero2.ennesimo(1));
console.log(numero3.ennesimo(2));
console.log(numero4.ennesimo(3));
console.log(numero5.ennesimo(4));
console.log(numero5.ennesimo(5));
console.log(numero5.ennesimo(6));
console.log(numero5.ennesimo(7));
console.log(numero5.ennesimo(8));