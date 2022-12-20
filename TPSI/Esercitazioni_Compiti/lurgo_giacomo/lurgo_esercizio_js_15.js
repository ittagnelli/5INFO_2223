let N = 3
let array = [3,3,3,3]

function control(array, N) {
    array.splice(array[N-1], 1) 
    return array;
}
console.log(control(array, N));


/*
function control2(array, N) {
    array.filter(N)}
*/