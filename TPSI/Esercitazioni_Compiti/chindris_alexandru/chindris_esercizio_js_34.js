function casual (N,M) {
    let insieme= new Set();

    while(insieme.size<N){
        x=Math.floor(Math.random() *M);
        insieme.add(x);
    }
    let final = Array.from(insieme).sort((a,b)=> {return b-a});
    return final;
}
//MAIN
console.log(casual(3,100));
console.log(casual(6,400));
console.log(casual(10,500));    