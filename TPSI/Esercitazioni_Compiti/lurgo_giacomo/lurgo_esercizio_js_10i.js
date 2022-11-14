let stringa = "in questa stringa c'è la parola coding e crativo";


function verifica (str) {
    if(str.includes("coding") && ("creativo") == true){
        return str;
    }
    else console.log("Parole non trovate");
}

verifica(stringa);