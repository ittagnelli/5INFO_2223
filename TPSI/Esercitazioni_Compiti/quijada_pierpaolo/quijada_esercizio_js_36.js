console.log(occorrenze("supercalifragilistichespiralidoso"));
// for(let [k,v] of occorrenze("supercalifragilistichespiralidoso").entries()){
//     console.log(`La parola "${k}" ha frequenza: ${v}`);
// }

function occorrenze(stringa) {
    let array = stringa.toLowerCase().split('');
    let mappa = new Map();
    array.forEach(function(item){
        if(item == 'a' || item == 'e' || item == 'i' || item == 'o' || item == 'u'){
            if(mappa.has(item))
                mappa.set(item, mappa.get(item) + 1);
            else
                mappa.set(item, 1);
        }
    })
    return mappa;
}