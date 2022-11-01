let Stampa = {
    nome:"William",
    cognome:"Vite",
    eta: 17,
    cf:"QWE123",
    datanascita: "1/1/1"
}

let Stampa2 = {
    nome:"Mario",
    cognome:"Rossi",
    eta: 19,
    cf:"RTY345",
    datanascita: "10/10/10"
}

function stampa_attributi(let_print){
    for(let key in let_print){

        console.log(`Il nome dell' attributo è: ${key}, il tipo è: ${typeof(let_print[key])}`);

        if(typeof(let_print[key]) === "string"){

            console.log(`Il valore dell' attributo vale: ${let_print[key].toLowerCase()}`);

        }
        else{
            console.log(`Il valore dell'attributo vale: ${let_print[key]}`);
        }
    }
}

console.log(stampa_attributi(Stampa));
console.log(stampa_attributi(Stampa2));
