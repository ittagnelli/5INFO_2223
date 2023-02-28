let N = 3;
let M = 100;

function esercizio(N,M){
    let nuovo= new Set()
    while(nuovo.size<N){
        let num= Math.floor(Math.random()*M)+1;
        nuovo.add(num);
    }
     return Array.from(nuovo).sort((a,b)=> b-a);  
}
console.log(esercizio(N,M));