function tronca(stringa, N){
    let splitted = stringa.split(" ");
    let risultato ="";
    if(splitted.length >= N){
        for(let i = 0; i < N; i++){
            risultato = risultato.concat(" ", splitted[i]);
            risultato = risultato.trim();
        }
    }
    else{
        risultato = "Error";
    }
    return risultato;
}
console.log(tronca("Ciao mi chiamo Dario",3));
console.log(tronca("ciao", 200));