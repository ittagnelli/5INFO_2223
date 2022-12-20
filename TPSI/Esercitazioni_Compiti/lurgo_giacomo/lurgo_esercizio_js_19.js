let array = [1,2,3,4,"ciao"]
let N = 2;

function retured(arr, N) {
    return /*arr.slice(0, N) ...OPPURE... */ arr.filter((element, index) => index < N);
}
console.log(retured(array, N));