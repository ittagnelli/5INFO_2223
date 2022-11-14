function capitalize_all(str){
    let words = str.split(' '); 
    for(let i = 0; i < words.length; i++){
        words[i] = (words[i].charAt(0).toUpperCase()).concat(words[i].slice(1))
        }
    return words.join(' '); 
}
console.log(capitalize_all("ciao mondo la terra gira!!!"))