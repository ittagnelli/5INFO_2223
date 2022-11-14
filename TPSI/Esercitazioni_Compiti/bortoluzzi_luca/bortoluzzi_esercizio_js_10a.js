function abbrevCognome(str) {
    let str2 = str.split(' ')
    let cognome = str2[1].slice(0, 1).toUpperCase().concat("."); //cognome con lettera maiuscola
    let primo_carattere = str2[0].charAt(0).toUpperCase(); 
    let resto_nome = str2[0].slice(1);
    
    return primo_carattere.concat(resto_nome, " ",  cognome);
}

console.log(abbrevCognome("mario rossi"));
