let stringa1 = [1,2,3,4];
let stringa2 = [];

console.log(ordina(stringa1, stringa2));

function ordina(stringa1, stringa2) {
    for(let i = stringa1.length-1; i >= 0; i--){
        stringa2.push(stringa1[i]);
    }

    return stringa2;
}