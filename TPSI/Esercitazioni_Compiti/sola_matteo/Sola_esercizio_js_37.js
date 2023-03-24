let utente = {
    nome: "Jon",
    role: "user"
}

let {nome, role, is_admin = false} = utente;

console.log(is_admin);
console.log(nome);
console.log(role);
