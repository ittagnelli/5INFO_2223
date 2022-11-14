let str = "Facciamo tanti esercizi che ci fanno bene";
let numero = 3;


function tronca (str, numero) {
    let str2 = str.split(` `);
    for(let i=0; i<numero; i++) {
        console.log(str2[i]);
    }
}

tronca(str, numero);
