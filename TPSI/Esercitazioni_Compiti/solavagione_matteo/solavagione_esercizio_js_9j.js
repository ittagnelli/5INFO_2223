let persona = {
    nome: "MARIO",
    cognome: "rossi",
    eta: 45,
    professione: "IMPIEGATO",
    residenza: "genova"
}

let auto = {
    nome: "bmw",
    modello: "x3",
    data_acquisto: "12-09-2022",
    cilidrata: 2993,
    custom: true
}

function stampa(pers){
    for(let chiave in pers){
        console.log(`la chiave è ${chiave}`);
        console.log(`il tipo dell' attributo è ${typeof(pers[chiave])}`);
        if(typeof(pers[chiave]) == "string")
            console.log(`il valore dell'attributo è ${pers[chiave].toLowerCase()}`);
        else
            console.log(`il valore dell'attributo è ${pers[chiave]}`);

    }
}

console.log(stampa(persona), "\n");
console.log(stampa(auto));
