let N = 2;
let array = [1,2,3,4,5,6,7,8];
console.log(ridimensiona(array, N))

function ridimensiona(array, N){
    return array.slice(0, N);
}