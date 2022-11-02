let user = {
    
    nome: "Michele",
    cognome: "Siracusa",
    data_nascita: "11_aprile_2004",
    sesso: "maschio",
    età: "18",
    scuola: "E. Agnelli",
    mail: "michele.siracusa@istitutoagnelli.it",
    classe: "5ª INF",

}

let key = Object.keys(user);
let length_user = Object.keys(user).length;

for(let i=0; i<length_user; i++){
    console.log(`La chiave ${key[i]} vale ${user[key[i]]}`);

}