function uguali(vet1,vet2){
    return vet1.map((item, index) => vet2[index] === item).every((item) => item == true)
}

console.log(uguali([1,2,32],[1,2,3]))