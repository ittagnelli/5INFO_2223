function insert(str1, n){
    
    if(str1.length > n){

    let str2 = str1.slice(0, n+1);
    
    return str2.concat("...");
    
    }
    else{
        return console.log("error");
    }
}

console.log(insert("Questi esercizi belli", 8));