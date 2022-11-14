function capitalize(str){
    let prima = str.charAt(0).toUpperCase();
    return prima.concat(str.substring(1));
}

console.log(capitalize("ciao mondo!!!"))