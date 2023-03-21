let utente = {
    nome: "Dario",
    role: "user"
};

let utente2 = {
    nome: "Marco",
    role: "admin",
    isAdimn: true
};

let {nome, role, isAdimn = false} = utente;
let {nome : nome_2, role: role_2, isAdimn: isAdimn_2 = false} = utente2;

console.log(nome,role,isAdimn);
console.log(nome_2,role_2,isAdimn_2);