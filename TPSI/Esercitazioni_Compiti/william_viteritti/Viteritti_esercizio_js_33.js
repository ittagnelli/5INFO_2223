
function fre(string){
    let mappa = new Map();

    string.split(" ").forEach(element=>{
        if(mappa.has(element))  
            mappa.set(element, mappa.get(element)+ 1);
        else
            mappa.set(element, 1);
    });
    stampa(mappa);
}
let string = "Javascript è un linguaggio molto bello. Javascript è un linguaggio di alto livello";


function stampa(mappa){
for(let [k, v] of mappa)
console.log(`La parola: ${k} - ha frequenza: ${v}`);
}

console.log(fre(string));