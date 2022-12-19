function binary(stringa) {
    return [...stringa].reverse().reduce((acc, curValue, idx)=> {
        return acc + Number(curValue)*Math.pow(2, idx)
    }, 0)
}

let stringa = "10101010";
console.log(binary(stringa));
//console.log(parseInt(stringa, 2));