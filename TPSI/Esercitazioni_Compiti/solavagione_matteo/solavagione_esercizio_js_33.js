let str = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";

function stampaOccorrenze(frase){
    let parole = frase.split(' ');
    let occorrenze = new Map();
    parole.forEach((item) => {
        if(occorrenze.has(item)){
            occorrenze.set(item, occorrenze.get(item) + 1);
        } else
            occorrenze.set(item, 1);
    })

    for(let [k, v] of occorrenze){
        console.log(`la parola ${k} ha frequenza: ${v}`);
    }    
}

console.log(stampaOccorrenze(str));
