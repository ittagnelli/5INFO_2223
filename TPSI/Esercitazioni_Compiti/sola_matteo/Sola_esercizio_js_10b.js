function protect_email(stringa) {
    let vecchia_stringa = stringa.slice(stringa.indexOf("."), stringa.indexOf("@"));

    stringa = stringa.replace(vecchia_stringa, "...");

    return stringa;
}

console.log(`L'indirizzo email offuscato è: ${protect_email("matteo.sola@istitutoagnelli.it")}`);
