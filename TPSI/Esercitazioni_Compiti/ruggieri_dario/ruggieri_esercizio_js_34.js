function ordina(insieme){
    return Array.from(insieme).sort((a,b)=> b-a);
}

function costruisci_set(N,M){
    let insieme = new Set();
    while(insieme.size < N){
        insieme.add(genera(M));
    }
    return insieme;

}
function genera(M){
    return Math.floor(Math.random()*M);
}

console.log(ordina(costruisci_set(3, 100)));
