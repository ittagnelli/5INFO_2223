let vet = [1,2,3,4,5,6,7]

function sotto_array(vet,M){
    let copy = [...vet];
    let vet1 = copy.splice(-M);
    let vet2 = copy.splice(M+1-vet.length-1);
    let risultato = [].concat(vet1, vet2);
    return risultato
}

console.log(sotto_array(vet, 3))