function random_number(N, M){
    let insieme = new Set();

    while(insieme.size < N){
        insieme.add(Math.floor(Math.random() * M));
    }

    return Array.from(insieme).sort().reverse()
}

console.log(random_number(3, 100));
