function invert_case(stringa) {
    let parole = stringa.split('');

    for(let i = 0; i < parole.length; i++) {
        if(parole[i] == parole[i].toUpperCase()){
            parole[i] = parole[i].toLowerCase();
        }
        else {
            parole[i] = parole[i].toUpperCase();
        }
    }
    return parole.join('');
}

console.log(`La nuova frase è: ${invert_case("ciao a tutti sono Matteo")}`);
