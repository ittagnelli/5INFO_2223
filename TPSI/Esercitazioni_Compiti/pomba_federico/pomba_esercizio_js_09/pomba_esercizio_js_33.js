let string = "javascript è un linguaggio molto bello. javascript è un linguaggio di alto livello"

function frequenza (string){
    let count = 0;
let str = [];
str = string.split(" ");

str.forEach(element,i => {
    if(str.has(i)){
        str.set(i, str.get(i), count ++);
 
    } else 
        str.set(i, 1);
});
}
