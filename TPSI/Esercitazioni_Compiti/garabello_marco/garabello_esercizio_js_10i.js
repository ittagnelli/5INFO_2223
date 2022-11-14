function find(str,coding,creativo){
    let substring = "";
    substring = substring.concat(coding, " ", creativo);

    return str.includes(substring) ? str : "parole non trovate"
}


console.log(find("test c","test","k"));