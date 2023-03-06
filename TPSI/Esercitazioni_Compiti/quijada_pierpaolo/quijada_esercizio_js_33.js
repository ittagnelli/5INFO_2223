let stringa = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";
console.log(occorrenze(stringa));
for(let [k,v] of occorrenze(stringa).entries()){
    console.log(`La parola "${k}" ha frequenza: ${v}`);
}

function occorrenze(stringa) {
    let array = stringa.split(' ');
    let mappa = new Map();
    array.forEach(function(item){
        if(mappa.has(item))
            mappa.set(item, mappa.get(item) + 1);
        else
        mappa.set(item, 1);
    })
    return mappa;
}