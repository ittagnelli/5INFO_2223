console.log(occorrenze("supercalifragilistichespiralidoso"));


function occorrenze(stringa) {
    let array = stringa.split('');
    let ris = new Set();
    array.forEach(function(item){
        ris.add(item);
    })
    return ris;
}