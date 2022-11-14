function search(str){
    if(str.includes("coding") == true && str.includes("creativo") == true){
        return str;
    }else
        return "Parole non trovate";}
console.log(search("Il coding è un segreto per farlo creativo"));