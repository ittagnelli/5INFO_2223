let vettore = [1,2,3,4,5];

function firstN(vettore, N){
    return [...vettore].slice(0, N);
}

console.log(firstN(vettore, 3));