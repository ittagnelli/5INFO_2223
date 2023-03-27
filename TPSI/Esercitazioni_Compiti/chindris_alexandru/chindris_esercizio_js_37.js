let utente = {
    nome: "Jon",
    role: "user"
}

let { nome, role, is_admin: isAdmin='false'} = utente;
console.log(nome, role, isAdmin);