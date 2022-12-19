function reverseArray(array){
    let dpr = [];
    array.forEach(element => dpr.unshift(element));
    return dpr;
}
console.log(reverseArray([1,2,3]));