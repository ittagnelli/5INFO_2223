let str = "1100"
function convert(string){
    let arr = Array.from(string)
    //console.log(arr)
    let decimal = arr.reverse().reduce((acc, current, currentindex) => acc + Math.pow(2,currentindex)*current, 0)
    return decimal
}

console.log(convert(str))