function tronca(str, n){
    
    if(str.length > n){
        let str2="";
        return str2.concat(str.slice(0, n+1), "...");
    }
    else
        return "errore";
}

console.log(tronca("pierpaolo sta venendo a prenderti", 15));