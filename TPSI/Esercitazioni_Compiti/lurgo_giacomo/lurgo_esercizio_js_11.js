let array = ["ciao", 1, 2, "tre"];
function funzione (array) {
    let invertito = [];
    array.forEach(item => {invertito.unshift(item)}); return invertito;
}
console.log(funzione(array));