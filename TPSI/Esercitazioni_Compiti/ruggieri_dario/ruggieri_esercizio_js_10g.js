function invert_case(stringa){
    let i = 0;
    while(stringa.charAt(i) != ''){
        if(stringa.charCodeAt(i) >= 97 && stringa.charCodeAt(i) <= 122){ //minuscolo
            let char = "";
            let ascii = +stringa.charCodeAt(i) -32;
            char = String.fromCodePoint(ascii);
            stringa = stringa.replace(stringa.charAt(i), char);
            i++;
            continue;
        }
        if(stringa.charCodeAt(i) >= 65 && stringa.charCodeAt(i) <= 90){ //maiuscolo
            let char = "";
            let ascii = +stringa.charCodeAt(i) +32;
            char = String.fromCodePoint(ascii);
            stringa = stringa.replace(stringa.charAt(i), char);
            i++;
            continue;
        }
        i++
    }
    return stringa;
}
console.log(invert_case("cIao"));
console.log(invert_case("CIAO!!"));
console.log(invert_case("CiAo"));
console.log(invert_case("CIAO"));