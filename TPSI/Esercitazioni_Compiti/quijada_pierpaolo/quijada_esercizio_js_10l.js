function fusion(str1, str2){
    return "".concat(str1[1], str1[0], str1.slice(2), " ", str2[1], str2[0], str2.slice(2)).trim(); 
}

console.log(fusion("ciao", "pierpaolo"));