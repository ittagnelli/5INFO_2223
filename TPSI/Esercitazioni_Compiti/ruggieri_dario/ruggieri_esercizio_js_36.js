let stringa = "supercalifragilistichespiralidoso";

function conta_occorrenze(stringa){
    let splitted = stringa.split('');
    let map = new Map();
    splitted.forEach(item => {
        if(map.has(item))
            map.set(item, map.get(item)+ 1);
        else
            map.set(item, 1);
    } )
    return occorenze_vocali(map);
}
function occorenze_vocali(mappa){
    let mappa_vocali = new Map();
    if (mappa.has('a'))
        mappa_vocali.set('a', mappa.get('a'));
    if (mappa.has('e'))
        mappa_vocali.set('e', mappa.get('e'));
    if (mappa.has('i'))
        mappa_vocali.set('i', mappa.get('i'));
    if (mappa.has('o'))
        mappa_vocali.set('o', mappa.get('o'));
    if (mappa.has('u'))
        mappa_vocali.set('u', mappa.get('u'));    
    return mappa_vocali;
}

console.log(conta_occorrenze(stringa));