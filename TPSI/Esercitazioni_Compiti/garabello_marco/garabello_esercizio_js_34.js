function gen(N,M){
    let set = new Set();
    while(set.size != N)
        set.add(Math.floor(Math.random() * M)+1);
    return Array.from(set).sort((a,b)=> b-a);
}

console.log(gen(3,100));