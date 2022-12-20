function sotto_array(arr,n){
    let copy = arr;
    let a1 = copy.splice(-n);
    let a2 = copy.splice(n+1-arr.length-1);
    let ris = Array(0).concat(a1, a2);
    return ris
}

console.log(sotto_array([1,2,3,4,5,6,7], 3))