let n="4";
console.log(somma(n));
console.log(somma((+n)+1));
console.log(somma((+n)-1));

function somma(n) {
    if(n<=0)
        return error;
    else
        return ((+n) * (+n+1))/2; 
}