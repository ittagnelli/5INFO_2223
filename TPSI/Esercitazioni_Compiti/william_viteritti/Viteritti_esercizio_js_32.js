function Riempi_vettore(N,M){
    
    return Array.from({length: N}, () => Math.floor(Math.random() * M)+1);
        
   }
   
   let N = 3;
   let M = 50;
   console.log(Riempi_vettore(N,M));