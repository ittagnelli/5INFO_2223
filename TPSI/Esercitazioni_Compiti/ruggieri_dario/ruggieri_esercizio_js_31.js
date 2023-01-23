let vettore = ["dario",1,2,"dario",2,1];

function rimuovi_duplicati(vettore){
    return Array.from(new Set(vettore));
}

console.log(rimuovi_duplicati(vettore));