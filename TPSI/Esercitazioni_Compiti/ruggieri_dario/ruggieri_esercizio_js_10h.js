function tronca(stringa, L){
    if(stringa.charAt(L) != ''){
        stringa = stringa.slice(0, L);
        stringa = stringa.concat(" ...");
    }
    else{
        stringa = "Error";
    }
    return stringa;
}
console.log(tronca("Ciao mi chiamo Dario",10));
console.log(tronca("ciao", 200));