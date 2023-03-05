let stringa = "supercalifragilistichespiralidoso";

function stringa_univoci(stringa){
    let insieme  = new Set();
    stringa = stringa.split('');

    for(let elemento of stringa){
        insieme.add(elemento);
    }
    
    return Array.from(insieme).join('');

    // return Array.from(new Set(stringa.split(''))).join('');
}

console.log(stringa_univoci(stringa));
