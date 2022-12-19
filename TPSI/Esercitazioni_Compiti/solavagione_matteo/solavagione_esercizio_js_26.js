function genInvert(N){
    let arr = Array(N).fill(0).map((value) => value = genRandom())
    console.log(arr)
    let inverse = arr.reverse()
    console.log(inverse)
    
}

function genRandom(){
    return Math.floor(Math.random()*100)
}

console.log(genInvert(7))