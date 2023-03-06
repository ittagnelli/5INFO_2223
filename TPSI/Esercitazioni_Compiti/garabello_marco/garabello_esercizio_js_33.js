function occ(str){
    let map = new Map();
    str.split(" ").forEach(el => map.has(el) ? map.set(el,map.get(el)+1) : map.set(el,1));
    for(let [k,v] of map)
        console.log(`La parola "${k}" ha frequenza: ${v}`);

}


occ("JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello");