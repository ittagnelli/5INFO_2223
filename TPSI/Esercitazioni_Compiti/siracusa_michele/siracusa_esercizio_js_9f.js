function Fibonacci(N){
    return (+N == 0 || +N == 1) ?  1 : (Fibonacci(+N-1) + Fibonacci(+N-2))
    
}


console.log(Fibonacci(3));
console.log(Fibonacci(5));
console.log(Fibonacci(6))