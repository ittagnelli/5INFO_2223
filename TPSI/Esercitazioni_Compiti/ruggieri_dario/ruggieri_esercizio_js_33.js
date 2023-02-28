let stringa = "Javascript è un linguaggio molto bello. Javascript è un linguaggio di alto livello";

function conta_occorrenze(stringa){
    let splitted = stringa.split(' ');
    let map = new Map();
    splitted.forEach(item => {
        if(map.has(item))
            map.set(item, map.get(item)+ 1);
        else
            map.set(item, 1);
            
    } )
    return map;
}
function stampa_mappa(map){
    for(let [k,v] of map){
        console.log(`La parola ${k} ha frequenza ${v}`);
    }
}

stampa_mappa(conta_occorrenze(stringa));
