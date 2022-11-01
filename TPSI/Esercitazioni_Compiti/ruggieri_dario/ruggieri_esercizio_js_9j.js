let oggetto ={
    att1: 5,
    att2: "CIAO",
    att3: true,
    att4: 9,
    att5: "ciao"
}
let oggetto2 ={
    att1: "OGGETTO",
    att2: "LITERARLS",
    att3: true,
    att4: true,
    att5: 4
}

function stampa_oggetti(oggetto){
    if(Object.keys(oggetto).length >= 5){
        for(key in oggetto){
            if(typeof(oggetto[key]) == "string") oggetto[key] = oggetto[key].toLowerCase();
            console.log(`L'attributo ${key} di tipo ${typeof(oggetto[key])} ha valore ${oggetto[key]}`);
        }
    }
    else{
        return;
    }
}
stampa_oggetti(oggetto);
console.log ("\n");
stampa_oggetti(oggetto2);