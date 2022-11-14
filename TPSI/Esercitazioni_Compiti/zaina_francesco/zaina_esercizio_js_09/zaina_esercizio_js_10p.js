function tronca(str, n){
    let str1 = str.split(" ");
    let str2 = "";

    for(let i = 0; i<n; i++){
       str2 =  str2 + str1[i] + " ";
    }
    return str2.trim();
}
console.log(tronca("Facciamo tanti esercizi che ci fanno bene", 2));