function tronca(stringa, N){
    if(stringa.charAt(N) != ''){
        stringa = stringa.slice(0, N);
        stringa = stringa.concat(" ...");
    }
    else{
        stringa = "Error";
    }
    return stringa;
}
console.log(tronca("Ciao mi chiamo Dario",10));
console.log(tronca("ciao", 200));