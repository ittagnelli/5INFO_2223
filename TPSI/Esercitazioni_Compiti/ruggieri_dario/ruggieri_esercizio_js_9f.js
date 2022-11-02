


function Fibonacci(n){
    if (+n == 0 || +n == 1) return 1;
    return Fibonacci(+n-1) + Fibonacci(+n-2);
}
console.log("Fibonacci ennesima 5: ",Fibonacci(5)); 
console.log("Fibonacci ennesima 6: ",Fibonacci(6)); 
console.log("Fibonacci ennesima 7: ",Fibonacci(7)); 
console.log("Fibonacci ennesima 8: ",Fibonacci(8)); 
console.log("Fibonacci ennesima 9: ",Fibonacci(9)); 

/*
function fattoriale(n){
    if(n == 0 || n == 1) return 1
    return n * fattoriale(n-1)*/