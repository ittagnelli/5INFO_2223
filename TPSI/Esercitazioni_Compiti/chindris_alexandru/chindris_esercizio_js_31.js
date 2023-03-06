function unique(arr) {
    return Array.from(new Set(arr))
}
//MAIN
let array = [1,2,4,5,6,6,6,2,3,1];

console.log(unique(array));