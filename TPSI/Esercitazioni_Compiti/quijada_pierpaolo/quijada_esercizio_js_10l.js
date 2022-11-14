function fusion(str1, str2){
    let str3 = "";
    str3 = str3.concat(str2[0], str1.slice(1), " ", str1[0], str2.slice(1));
    return str3;
}

console.log(fusion("ciao", "pierpaolo"));