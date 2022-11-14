function upper_case(stringa) {
    let char = stringa.split('');

    for(let i = 0; i < char.length; i++) {
      if(char[i].charCodeAt(0) >= 97 && char[i].charCodeAt(0) <= 122) {
        char[i] = String.fromCharCode(char[i].charCodeAt(0) - 32);
      }
      
    }
    return char.join('');
}

console.log(`La nuova frase è: ${upper_case("ciao a tutti sono Matteo")}`);
