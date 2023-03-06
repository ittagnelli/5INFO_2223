function countRepeated(string) {
    let array= string.split(' ');
    let mappa = new Map();
    for (const item of array){
        if(mappa.has(item)){
            mappa.set(item,mappa.get(item)+ 1);
        }
        else{
            mappa.set(item, 1)
        }
    }
    return mappa;
}

//MAIN
let test = "JavaScript è un linguaggio molto bello. JavaScript è un linguaggio di alto livello";
console.log(countRepeated(test));