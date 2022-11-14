function conc(str1, str2){
    let first = str1.replace(str1.charAt(0), str2.charAt(0));
    let second = str2.replace(str2.charAt(0), str1.charAt(0));
    let ret = "";
    return ret.concat(first, " ", second);
}
console.log(conc("Provare", "Prova"));