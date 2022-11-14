function protect_email(str){
    let point = str.indexOf(".");
    let snail = str.indexOf("@");
    return str.substring(0,point) + "..." + str.substring(snail)
}

console.log(protect_email("michele.siracusa@istitutoagnelli.it"));


