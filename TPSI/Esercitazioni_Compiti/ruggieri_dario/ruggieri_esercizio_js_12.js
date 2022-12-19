let vettore1 = [1,2,3];
let vettore2 = [1,2,3];
let vettore3 = ["ciao", 2, "mario"]
let vettore4 = [2,1,3]

function verifica(vettore1, vettore2){
    return vettore1.join('') == vettore2.join('') ? true : false;
}

console.log(verifica(vettore1, vettore2));
console.log(verifica(vettore2, vettore3));
console.log(verifica(vettore1, vettore4));