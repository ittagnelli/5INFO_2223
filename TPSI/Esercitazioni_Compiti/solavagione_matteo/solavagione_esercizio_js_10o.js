function tronca(str, N){
    if(str.length > N)
        return str.slice(0, N) + "..."
    else
        console.log("la stringa ha lunghezza inferiore a N")
}

console.log(tronca("sei un colione", 8))