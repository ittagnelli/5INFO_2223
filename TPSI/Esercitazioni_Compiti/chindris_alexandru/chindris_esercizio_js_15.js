//Rimuove n dall' array
function x (arr,n){
    let tmp = arr.indexOf(n)
    arr.splice(tmp,1);
    return arr;
}
let array = [1,2,3,4,5,6,7]
let n = 3;
console.log(x(array,n));

/* 
function y(array, n) {
    return array.filter(item => item != n);
} */