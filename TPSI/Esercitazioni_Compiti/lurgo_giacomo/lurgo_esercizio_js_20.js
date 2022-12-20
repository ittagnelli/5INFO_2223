let array = [1,2,3,4,"c"]
let N = 3;

function returning(arr, N) {
    return arr.slice(-N)
}
console.log(returning(array, N));