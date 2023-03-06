
function num_ultimi(arr, n){
    
    return arr.slice(arr.length - n, arr.length-1);
}

let arr = [1,2,3,4,5,6,7,8,9,10];

let n = 4;

console.log(num_ultimi(arr, n));