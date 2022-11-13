function protect_email(str){
    let primo;
    let punto = str.indexOf(".");
    let chiocciola = str.indexOf("@");
    let secondo;

    
    let p = punto;
    let c = chiocciola;

    primo = str.charAt(p);
    secondo = str.charAt(c);

    let variabile = str.substring(p,c);
    

    str.replaceAll(variabile, " ...");

    
    return str.replaceAll(variabile, " ...");
}

let persona = protect_email("william.viteritti@istitutoagnelli.it");
console.log(persona);