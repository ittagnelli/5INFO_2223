
let stringa =  "supercalifragilistichespiralidoso";

function taglia(stringa){
    return Array.from(new Set(stringa)).join('');
}

console.log(taglia(stringa));