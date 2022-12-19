function decimale(value){
    let array = value.split('');
    console.log(array);
}
function bin_to_desc(str){
    let arr = str.split('')
    return arr.reverse().reduce((acc,curr,index) => acc += +curr * (2**index), 0);
}

console.log(bin_to_desc('0111'));
