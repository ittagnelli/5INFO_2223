function cerca(str){
    return str.includes("coding") == true && str.includes("creativo") == true ? str : "parole non trovate";
}

console.log(cerca("Stiamo facendo in coding con un creativo"));