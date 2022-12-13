function reverseArray(array){
    let ret = [];
    array.forEach(element => ret.unshift(element));
    return ret;
}

console.log(reverseArray([1,2,3]));