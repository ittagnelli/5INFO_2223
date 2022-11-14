function concat_invert(stringa1, stringa2) {
    let stringa_finale = "";

    if(stringa1.indexOf(" ") == -1 && stringa2.indexOf(" ") == -1) {
        let char = stringa1.charAt(1);
        stringa1 = stringa1.replace(stringa1.charAt(1), stringa1.charAt(0));
        stringa1 = stringa1.replace(stringa1.charAt(0), char);
    
        char = stringa2.charAt(1);
        stringa2 = stringa2.replace(stringa2.charAt(1), stringa2.charAt(0));
        stringa2 = stringa2.replace(stringa2.charAt(0), char);
    
        stringa_finale = stringa_finale.concat(stringa1, " ", stringa2);
    }
    else {
        stringa_finale = "Errore nello svolgimento delle operazioni";
    }

    return stringa_finale;
}

console.log(`La prima frase è: ${concat_invert("ciao", "Matteo")}`);
console.log(`La seconda frase è: ${concat_invert("ciao sono Matteo", "Sola")}`);
