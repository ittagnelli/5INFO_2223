let utente1 = {
    nome: "Jon",
    role: "user"
}

let utente2 = {
    nome: "Jon",
    role: "user",
    is_Admin: "true"
}

let {nome, role, is_Admin=false} = utente2;
console.log(nome);
console.log(role);
console.log(is_Admin);