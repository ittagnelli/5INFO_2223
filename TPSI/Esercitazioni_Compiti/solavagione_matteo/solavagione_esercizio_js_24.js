function genRandom(N){
    return Math.floor(Math.random()*N)
}

function fillCasual(){
    let arr = Array(7).fill(0)
   
    arr.forEach((value, idx) =>{
        let choice = genRandom(2)
        if(choice)
            arr[idx] = String.fromCharCode(genRandom(10) + 48)
        else
            arr[idx] = String.fromCharCode(genRandom(26) + 97)
    })

    return arr
    
}

console.log(fillCasual())