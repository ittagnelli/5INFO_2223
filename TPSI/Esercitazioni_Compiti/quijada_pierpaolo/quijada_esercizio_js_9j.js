let persona1 = {
    nome: "PIERPAOLO",
    cognome: "QUIJADA GOMEZ",
    eta : 17,
    studente : true,
    sesso: "M"
}

let persona2 = {
    nome: "MATTEO",
    cognome: "SALITO",
    eta : 17,
    studente : true,
    sesso: "M"
}

control(persona1);
control(persona2);

function control (persona) {
    let dati = Object.keys(persona);
    let lunghezza = Object.keys(persona).length;
    console.log(dati);
    console.log(lunghezza);
    for(let i=0; i<lunghezza; i++){
        console.log(`Attributo ${i+1}`);
        console.log(dati[i]);
        console.log(typeof(persona[dati[i]]));
        console.log(typeof(persona[dati[i]]) == "string" ? persona[dati[i]].toUpperCase() : persona[dati[i]]);
    }
}