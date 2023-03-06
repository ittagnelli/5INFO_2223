function numeri_casuali(N, M){
    let array = [];
    let numeri = new Set();
    while(numeri.size<N)
        numeri.add(Math.floor(Math.random() * M) + 1);
    numeri.forEach(item => array.push(item));
    return array.sort((a,b) => {
        return b-a;
    })
}

console.log(numeri_casuali(3, 10));