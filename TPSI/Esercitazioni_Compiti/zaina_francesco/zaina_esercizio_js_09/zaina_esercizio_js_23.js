function trans(str){
    let arr = str.split("");
    return arr.reverse().reduce((acc, curr, index) => acc += +curr * (2**index), 0);
}
console.log(trans("1111"));