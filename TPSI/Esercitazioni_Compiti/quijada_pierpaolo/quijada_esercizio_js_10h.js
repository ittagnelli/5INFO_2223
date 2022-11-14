function tronca(str, l){
    str = str.slice(0, l+1);
    str = str.concat("...");
    return str;
}

console.log(tronca("Pierpaolo nasce cresce e conquista", 10))