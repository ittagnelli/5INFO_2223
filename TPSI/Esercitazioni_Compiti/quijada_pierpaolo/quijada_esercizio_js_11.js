function inverti(array){
    let num_elementi = array.length;
    let array2 = [];
    for(let i=0; i<array.length; i++){
        num_elementi--;
        array2[i] = array[num_elementi];
    }
    return array2;
}

let array = [1,2,3];
console.log(inverti(array));