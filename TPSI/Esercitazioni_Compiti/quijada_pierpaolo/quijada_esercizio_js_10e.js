function capitalize_all(str){
    let parole = str.split(" ");
    let str2 = "";
    for(let i=0; i<parole.length; i++){
        str2 = str2 + parole[i][0].toUpperCase() + parole[i].slice(1) + " ";
    }
    return str2.trim();
}

console.log(capitalize_all("pierpaolo ti sta inseguendo"));