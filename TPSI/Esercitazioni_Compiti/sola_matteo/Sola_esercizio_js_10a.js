function abbreviazione(stringa) {
    let stringa_splitted = stringa.split(' ');

    let cognome = stringa_splitted[1].slice(0, 1).toUpperCase().concat("."); //cognome con lettera maiuscola
    
    let nome = stringa_splitted[0].charAt(0).toUpperCase();
    let resto_nome = stringa_splitted[0].slice(1);
    
    return nome.concat(resto_nome, " ", cognome);
}

console.log(`Il nome abbreviato è: ${abbreviazione("matteo sola")}`);
