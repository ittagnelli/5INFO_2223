let str = "1100"
function converti(str){
    let arr = Array.from(str)
    let decimal = arr.reverse().reduce((acc, current, currentindex) => acc + Math.pow(2,currentindex)*current, 0)
    return decimal;
}

console.log(converti(str))