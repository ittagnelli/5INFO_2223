function trova(str){
    if(str.includes("coding") == true && str.includes("creativo") == true){
        return str;
    }else
        return "parole non trovate";
}

console.log(trova("gli alberi sono belli"));