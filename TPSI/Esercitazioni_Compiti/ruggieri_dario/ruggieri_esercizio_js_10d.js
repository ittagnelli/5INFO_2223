function capitalize(stringa){
    let lettera = "";
    lettera = stringa.slice(0,1).toUpperCase();
    return stringa.replace(stringa.slice(0,1), lettera);
}
console.log(capitalize("ciaoo mondo!!!"));
console.log(capitalize("Ciaoo mondo!!!"));
console.log(capitalize("oggi è una bella giornata"));