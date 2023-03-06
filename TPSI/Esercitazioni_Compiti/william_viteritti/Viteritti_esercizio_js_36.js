let stringa = "supercalifragilistichespiralidoso";

function numero_occorrenze(stringa){
    let splitted = stringa.split('');
    let map = new Map();
    splitted.forEach(item => {
        if(map.has(item))
            map.set(item, map.get(item)+ 1);
        else
            map.set(item, 1);
    } )
    return occorrenze_delle_vocali(map);
}
function occorrenze_delle_vocali(mappa){
    let vocali = new Map();
    if (mappa.has('a'))
        vocali.set('a', mappa.get('a'));
    if (mappa.has('e'))
        vocali.set('e', mappa.get('e'));
    if (mappa.has('i'))
        vocali.set('i', mappa.get('i'));
    if (mappa.has('o'))
        vocali.set('o', mappa.get('o'));
    if (mappa.has('u'))
        vocali.set('u', mappa.get('u'));    
    return vocali;
}

console.log(numero_occorrenze(stringa));