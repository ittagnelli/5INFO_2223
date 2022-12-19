let vettore = [1,2,3,4];

function prodotto_quadrati(vettore){
    return vettore.reduce((acc, curr)=> acc* curr**2,1);
}

console.log(prodotto_quadrati(vettore));