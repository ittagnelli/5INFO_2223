// Verifica se due array sono uguali
function x (a1, a2){
    return a1.map((el,idx) => a2[idx]== el).every(item => item == true)
}

let array1 = [1,2,3];
let array2 = [1,2,3];

console.log(x(array1, array2));