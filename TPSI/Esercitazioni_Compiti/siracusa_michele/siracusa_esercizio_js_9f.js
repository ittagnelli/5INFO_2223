function Fibonacci(Numero){
    return (+Numero == 0 || +Numero == 1) ?  1 : (Fibonacci(+Numero-1) + Fibonacci(+Numero-2))
    
}

console.log(Fibonacci(3));
console.log(Fibonacci(5));
console.log(Fibonacci(6))