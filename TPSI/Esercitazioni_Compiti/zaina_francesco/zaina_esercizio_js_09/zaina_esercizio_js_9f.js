let n = "4";

console.log(Fibonacci((+n)+1));
console.log(Fibonacci((+n)+2));
console.log(Fibonacci((+n)+3));
console.log(Fibonacci((+n)+4));
console.log(Fibonacci((+n)+5));

function Fibonacci(n){
    if(n==0 || n == 1){
        return 1;
    }

    return (Fibonacci(n-1)+Fibonacci(n-2));
    
}