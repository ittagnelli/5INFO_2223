function abbreviazione(stringa){
    let splitted = stringa.split(" ");
    let cognome = splitted[1].slice(0,1);
    let nome = splitted[0];
    nome = nome.replace(nome.slice(0,1), nome.slice(0,1).toUpperCase());
    cognome = cognome.replace(cognome.slice(0,1), cognome.slice(0,1).toUpperCase());
    let modificato = "";
    return modificato.concat(nome, " ", cognome, ".");
}
console.log(abbreviazione("Dario Ruggieri"));
console.log(abbreviazione("marco garabello"));