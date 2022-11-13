function Capitalize(str){
    let punto = str.charAt(0);
    
    return str.replace(punto, punto.toUpperCase());
}

let persona = Capitalize("william.viteritti@istitutoagnelli.it");
console.log(persona);