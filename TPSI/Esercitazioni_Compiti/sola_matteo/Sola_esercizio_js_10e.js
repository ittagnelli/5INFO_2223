function capitalize_all(stringa) {
    let parole = stringa.split(' ');
    let lunghezza_stringa = parole.length;
    let risultato = '';

    for(let i = 0; i < lunghezza_stringa; i++) {
        let char = parole[i].slice(0, 1).toUpperCase(); 
        parole[i] = parole[i].replace(parole[i].slice(0, 1), char);

        risultato = risultato.concat(' ', parole[i]);
        risultato = risultato.trim();
    }

    return risultato;
}

console.log(`La nuova frase è: ${capitalize_all("ciao a tutti sono Matteo")}`);
