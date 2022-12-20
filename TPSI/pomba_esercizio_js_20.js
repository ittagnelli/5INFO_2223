let arr = [2,3,4,63,2,6,32,3,0,3,5,2456,3]
let n = 3

function restls(arr, n){
return arr.slice(arr.length-n, arr.length);

}

console.log(restls(arr, n));