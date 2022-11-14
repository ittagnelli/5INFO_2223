function remove(stringa1, stringa2){
    let risultato = "";
    if(stringa1.includes(stringa2)){
        risultato = stringa1.replace(stringa2 + " ", "");
    }
    else{
        risultato = "no change";
    }
    return risultato;
}
console.log(remove("The quick brown fox jumps over the lazy dog", "the"));
console.log(remove("The quick brown fox jumps over the lazy dog", "ciao"));