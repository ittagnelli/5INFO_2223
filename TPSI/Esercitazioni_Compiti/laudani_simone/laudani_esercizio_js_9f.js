let n = "5";
let n1 = fibonacci((+n)+1);
let n2 = fibonacci((+n)+2);
let n3 = fibonacci((+n)+3);
let n4 = fibonacci((+n)+4);

console.log(fibonacci(n)), console.log(n1), console.log(n2), console.log(n3), console.log(n4);

function fibonacci(n){
    if (n == 0 || n == 1) {
        return 1;
    }

    return fibonacci(n-1) + fibonacci(n-2)
}