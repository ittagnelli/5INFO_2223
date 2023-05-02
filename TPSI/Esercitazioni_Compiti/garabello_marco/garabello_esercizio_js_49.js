class Fibonacci {

    fibo(n) {return (+n == 0 || +n == 1) ?  1 : (this.fibo(n-1) + this.fibo(n-2))}
}


let gen = new Fibonacci()

console.log(gen.fibo(1))
console.log(gen.fibo(3))
console.log(gen.fibo(4))
console.log(gen.fibo(5))
console.log(gen.fibo(6))