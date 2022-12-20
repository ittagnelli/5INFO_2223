let array = [1,2,3,4,5,6];
let N = 2;
console.log(ridimensiona(array, N));

function ridimensiona(array, N) {
    return array.slice((array.length-N), array.length);
}