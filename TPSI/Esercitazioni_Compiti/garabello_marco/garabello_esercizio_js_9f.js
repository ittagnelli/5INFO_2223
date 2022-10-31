function fibo(n){
    return (+n == 0 || +n == 1) ?  1 : (fibo(+n-1) + fibo(+n-2))
}

console.log(fibo(3));
console.log(fibo(5));
console.log(fibo(6))