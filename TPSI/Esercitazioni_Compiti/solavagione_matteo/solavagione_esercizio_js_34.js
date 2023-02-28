function casuali(N,M){
    let numeri = new Set();
    while(numeri.size < N){
        numeri.add(Math.floor(1 + (Math.random()*M)));
    }
        
    let array_numeri = Array.from(numeri);
    let ord = array_numeri.sort((a, b) => {
        return b - a;
    })

    return ord;
    
}


console.log(casuali(40,100));