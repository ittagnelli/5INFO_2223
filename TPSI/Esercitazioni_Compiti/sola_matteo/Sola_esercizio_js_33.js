let stringa = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";

function stampa_occorrenze(frase){
    let vet = [];
    vet = frase.split(' ');
    let occ = new Map();

    vet.forEach((item) => {
        if(occ.has(item)){
            occ.set(item, occ.get(item) + 1);
        }else {
            occ.set(item, 1);
        }
    })
    
    for(let [k, v] of occ){
        console.log(`La parola "${k}" ha frequenza: ${v}`);
    }
}

console.log(stampa_occorrenze(stringa));
