let stringa = "Ecco la stringa presa in input"

function returned (str) {
        let x = str.length;
        let speriamo = Array(x);
        for (let i=0; i<x; i++) {
            speriamo[i] = str.charCodeAt(i);
        return (speriamo);
    }
}
function upper_case (str) {
    let a = str.split(` `);
    let l = str.length;
    //console.log(str.replace(str, str.toUpperCase()));
    //console.log(str.replace(str, str.char));
    returned(str);
    console.log(speriamo);

    /*
    for (let i=0; i<l; i++){
        let code = str.charCodeAt(i);
     console.log(code[i] +32);
}*/
}
upper_case(stringa);