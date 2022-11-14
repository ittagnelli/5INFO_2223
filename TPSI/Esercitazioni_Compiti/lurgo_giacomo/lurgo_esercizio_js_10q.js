let stringa = " The quick brown fox jumps over the lazy dog";
let stringa2 = "the";

function rimuovi(str, str2) {
   /* if(str.includes(str2) == true ) {
        indice = str.indexOf(str2);
        console.log(str.slice(indice).replace());
        console.log("PSI)", indice);
        console.log(str.concat(str.slice(indice)))
    }*/

    a = str.split(` `);
    for(let i=0; i<a; i++) {
        if(a[i].startsWith(str2) == true) {
            console.log("PSI");
        }
    }
}

rimuovi(stringa, stringa2);