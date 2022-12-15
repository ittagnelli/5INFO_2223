function compara_vettori(array1, array2) {
   return array1.map((el, idx) => array2[idx] === el).every(item => item == true);
}

let vettore1 = [1, 2, 3, 4, 5];
let vettore2 = [1, 2, 32, 4, 5];

console.log(compara_vettori(vettore1, vettore2));