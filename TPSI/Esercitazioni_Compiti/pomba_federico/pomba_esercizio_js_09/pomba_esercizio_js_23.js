function convert(str){
    let arr = str.split('')
    return arr.reverse().reduce((acc,curr,index) => acc += +curr * (2**index), 0);
}

let bin = '0011011';

console.log(convert(bin));