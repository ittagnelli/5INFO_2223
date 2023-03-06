function countVoc(string) {
    
    let array = Array.from(string);
    let mappa = new Map();
    let occ = new Map();
    let dizionario = ["a","e","i","o","u"];
    
    for (let x of array){
        
        if(mappa.has(x))
        {
            mappa.set(x,mappa.get(x)+ 1);

        }else{
            mappa.set(x,1);
        }
    }
    for (let y of dizionario){
        occ.set(y,mappa.get(y));
    }
    return occ;
}

//MAIN
let stringa="supercalifragilistichespiralidoso";
console.log(countVoc(stringa));