let utente = {
    nome: "Jon",
    role: "user"
}

let {nome, role, isAdmin = false} = utente

console.log(isAdmin)
console.log(nome)
console.log(role)