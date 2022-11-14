function tronca(str, n){
    let str2 = "";
    for(let i=0; i<n; i++){
        str2 = str2 + str.split(" ")[i] +" ";
    }
    return str2.trim();
}

console.log(tronca("pierpaolo è dietro di te", 3));