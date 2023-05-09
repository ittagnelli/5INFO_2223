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
