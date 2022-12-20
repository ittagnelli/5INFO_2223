let N = 5
let array = [1,2,3,4,5]

function rest(array, N){
array.splice(array[N-1],1);
return array

}

console.log(rest(array, N));