function abbreviazione(str){
    let parole = str.split(" ");
    let str2 = "";
    str2 = str2.concat(parole[0][0].toUpperCase(), parole[0].slice(1), " ", parole[1][0].toUpperCase(), ".");
    return str2;
}

console.log(abbreviazione("pierpaolo quijada"))