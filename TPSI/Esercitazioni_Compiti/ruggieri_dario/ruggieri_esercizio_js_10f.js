let stringa = "";

function upper_case(stringa){
    let i = 0;
    while(stringa.charAt(i) != ''){
        if(stringa.charCodeAt(i) >= 97 && stringa.charCodeAt(i) <= 122){
            let char = "";
            let ascii = +stringa.charCodeAt(i) -32;
            char = String.fromCodePoint(ascii);
            stringa = stringa.replace(stringa.charAt(i), char);
        }
        i++;
    }
    return stringa;
}
console.log(upper_case("ciao"));
console.log(upper_case("ciao Mondo !!"));
