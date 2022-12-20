/*function random(){
    return Math.ceil(1 + (Math.random()*50))
}

function funzione(array, N){
    let copy = [...array];
    return copy.map(item => item = (item%N? get_random() : 0));
}

let array = Array(100).fill(0).map(item => item = random());
console.log(funzione(array,3));
*/
function eccolo() {
    let n=1000;
let random = (n) => Math.floor(Math.random()*n)+1;
let arr = Array(100).fill(0).map(element => random(1000))
return arr.map(element=> element%5 == 0 ? 0: random(50));
}

console.log(eccolo());