function abbSurname(str) {
    let str2 = str.split(' ')
    let surname = str2[1].slice(0, 1).toUpperCase().concat("."); 
    let character1 = str2[0].charAt(0).toUpperCase(); 
    let abbName = str2[0].slice(1);

    return character1.concat(abbName, " ",  surname);
}

console.log(abbSurname("michele siracusa"));



