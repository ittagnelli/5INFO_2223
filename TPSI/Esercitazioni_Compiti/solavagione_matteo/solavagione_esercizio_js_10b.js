function protect_email(str){
    let punto = str.indexOf(".");
    let chiocciola = str.indexOf("@");
    return str.substring(0,punto) + "..." + str.substring(chiocciola)
}

console.log(protect_email("matteo.solavagione@istitutoagnelli.it"));