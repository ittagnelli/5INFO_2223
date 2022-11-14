let stringa = "prima";
let stringa2 = "seconda";

function scambio (str, str2) {
    a = str.split();
    b = str2.split();
    ris = (str2.charAt(0).replace(str.charAt(0))).concat(str.slice(1));
    ris2 = (str.charAt(0).replace(str2.charAt(0))).concat(str2.slice(1));
   // console.log(str.concat(str.charAt(0).replace(str2.charAt(0))).concat(str2.slice(1)));
    console.log(ris.concat(ris2));
}

scambio(stringa, stringa2);