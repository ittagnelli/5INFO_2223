function capitalize_all(stringa){
    let splitted = stringa.split(' ');
    let lunghezza = splitted.length;
    let risultato = '';
    for(let i = 0 ; i < lunghezza; i++){
        let char = "";
        char = splitted[i].slice(0,1).toUpperCase();  
        splitted[i] = splitted[i].replace(splitted[i].slice(0,1), char);
        risultato = risultato.concat(' ',splitted[i]);
        risultato = risultato.trim();
    }
    console.log(risultato);
    return splitted;
}
capitalize_all("ciao sono Dario e abito a Torino");