let stringa =  "supercalifragilistichespiralidoso";

function modify(stringa){
    return Array.from(new Set(stringa)).join('');
}

console.log(modify(stringa));