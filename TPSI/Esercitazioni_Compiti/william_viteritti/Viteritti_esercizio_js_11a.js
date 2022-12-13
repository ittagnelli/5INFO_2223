function inverso (numeri){
    let salva_lenght = numeri.length;
    let array2 = Array(salva_lenght);
    for(let i = 0; i< numeri.length; i++){
        salva_lenght--;
        array2[i] = numeri[salva_lenght];
    }
    return array2;
}

let numeri = [1,2,3,4,5];
console.log(inverso(numeri));