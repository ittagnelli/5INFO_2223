function protect_email(str){
    let parole = str.split(".");
    let str2 = "";
    let pos_chiocciola = parole[1].indexOf("@");
    str2 = str2.concat(parole[0],"...", parole[1].slice(pos_chiocciola));
    return str2;
}

console.log(protect_email("pierpaolo.quijada@istitutoagnelli.it"))