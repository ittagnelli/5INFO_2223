function bin_to_dec(str){
    let array = str.split("");
    return array.reverse().reduce((acc, curr, index) => acc += +curr * (2**index), 0);
}

console.log(bin_to_dec("1111"));