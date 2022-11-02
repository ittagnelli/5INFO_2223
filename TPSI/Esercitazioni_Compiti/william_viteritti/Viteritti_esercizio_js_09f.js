function Fibonacci(n){
    if(+n == 0 || +n == 1){
        return 1;
    }
    return Fibonacci(+n-1)+Fibonacci(+n-2);
}
console.log("Successione di Fibonacci ennesima:",Fibonacci(3));
console.log("Successione di Fibonacci ennesima:",Fibonacci(5));
console.log("Successione di Fibonacci ennesima:",Fibonacci(8));
console.log("Successione di Fibonacci ennesima:",Fibonacci(10));
console.log("Successione di Fibonacci ennesima:",Fibonacci(12));