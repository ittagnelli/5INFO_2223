function fibonacci(n) {
    if (n <= 0) {
        return console.log("Input non valido: n deve essere un numero intero positivo");
    }

    let a = 1;
    let b = 0;
    let c;

    while (n > 0) {
        c = a;
        a = a + b;
        b = c;
        n--;
    }

    return b;
}
  

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(7));
console.log(fibonacci(10));
console.log(fibonacci(15));
console.log(fibonacci(24));
