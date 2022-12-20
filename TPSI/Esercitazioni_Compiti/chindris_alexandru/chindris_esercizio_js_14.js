// Sposta l'emento in posizione n in posizione m 
function x (arr, n, m) {
    let y = arr[n];
    arr.splice(n,1);   
    arr.splice(m,0,y);
    return arr; 
}

/* 
function y (list,n,m){
    let tmp_array = list.slice();
    let tmp = tmp_array[n];
    tmp_array[m]=tmp;
    return tmp_array;
}
 */
let array = [10,20,30,40,50,60]
let n = 3;
let m = 2;


x(array, n, m);
console.log(array);