let utente = {
    nome: "John",
    role: "user",
    is_Admin: "true"
}

let {nome,role,is_Admin = false} = utente;

console.log(nome,role,is_Admin);