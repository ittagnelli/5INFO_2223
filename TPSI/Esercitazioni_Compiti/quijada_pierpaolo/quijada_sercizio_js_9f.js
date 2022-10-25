let n="5";
console.log(fibonacci((+n)+1));
console.log(fibonacci((+n)+2));
console.log(fibonacci((+n)+3));
console.log(fibonacci((+n)+4));
console.log(fibonacci((+n)+5));

function fibonacci(n) {
    if(n==0 || n==1)
        return 1;
    return (fibonacci(n-1) + fibonacci(n-2));
}
