let stringa = "supercalifragilistichespiralidoso";

function occorrenze_vocali(stringa){
    stringa = stringa.split('');
    let map = new Map([
        ['a', 0],
        ['e', 0],
        ['i', 0],
        ['o', 0],
        ['u', 0]
    ]);

    for(let elemento of stringa){
        if(map.has(elemento)){
            map.set(elemento, map.get(elemento) + 1);
        }
    }

    return map
}

console.log(occorrenze_vocali(stringa));
