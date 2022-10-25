
// Fn = Fn-1 + Fn-2
function fibonacci(n){
    if(n<3) return 1;
    return fibonacci(+n-1) + fibonacci(+n-2);
}

console.log(fibonacci(3));
console.log(fibonacci('5'));
console.log(fibonacci(7));
console.log(fibonacci('10'));
console.log(fibonacci(20));

