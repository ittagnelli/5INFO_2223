let stringa = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";

function word_counter(stringa){
    let map = new Map();

    for(let elemento of stringa.split(' ')){
        let key = elemento.toLowerCase();

        if(map.has(key)){
            map.set(key, map.get(key) + 1);
        }
        else{
            map.set(key, 1);
        }
    }

    return map
}

console.log(word_counter(stringa));
