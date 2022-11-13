function concat_invert(stringa1, stringa2){
    let risultato = "";
    if(stringa1.indexOf(" ") == -1 && stringa2.indexOf(" ") == -1){
        let char = stringa1.charAt(1);
        stringa1 = stringa1.replace(stringa1.charAt(1), stringa1.charAt(0));
        stringa1 = stringa1.replace(stringa1.charAt(0), char);
    
        char = stringa2.charAt(1);
        stringa2 = stringa2.replace(stringa2.charAt(1), stringa2.charAt(0));
        stringa2 = stringa2.replace(stringa2.charAt(0), char);
    
        risultato = risultato.concat(stringa1, " ", stringa2);
    }
    else{
        risultato = "Error";
    }

    return risultato;
}
console.log(concat_invert("ciao", "giacomo"));
console.log(concat_invert("ciao rossi", "giacomo"));