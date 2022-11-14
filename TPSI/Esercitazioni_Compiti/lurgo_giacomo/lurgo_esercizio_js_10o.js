let str = "Facciamo tanti esercizi che ci fanno bene";
let numero = 10;
let punto = ".";

function tronca (str, numero) {
 let str2 = (str.slice(0, numero));
 console.log(str.slice(0, numero).concat(punto.repeat(3)));
}

tronca(str, numero);

