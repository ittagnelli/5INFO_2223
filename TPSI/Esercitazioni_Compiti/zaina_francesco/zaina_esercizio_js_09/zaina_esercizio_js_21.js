let arr = Array(100)
let casual = arr.fill(0).map((value) => value = genRandom())
function genRandom(){
    return Math.floor(1 + (Math.random()*50))
}

function riempiAzzera(arraye, N){
    return arraye.map((value) => value%N == 0 ? 0 : value)
}

console.log(riempiAzzera(casual, 5))