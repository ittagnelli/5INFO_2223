let n = "5";
let n1 = sum((+n)+1);
let n2 = sum((+n)+2);
console.log(sum(n)), console.log(n1), console.log(n2);
function sum(n){
    return (((+n) * (+n+1)) / 2);
}