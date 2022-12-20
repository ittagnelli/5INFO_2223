let vettore = Array.from({length: 100}, () => Math.floor(Math.random() * 50)+1);
function riempi(vettore,N){
    console.log(vettore);
    let risultato = vettore.map((item) => {
        if(item%N == 0)
            return item = 0;
        else
            return item = Math.floor(Math.random() * 50)+1;
    });
    return risultato;
}

console.log(riempi(vettore, 5));