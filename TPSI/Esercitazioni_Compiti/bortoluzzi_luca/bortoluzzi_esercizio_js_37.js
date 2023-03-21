let utente = {
    nome: "Jon",
    role: "user"
}

let { nome, role, isAdmin } = utente;

if(isAdmin != null) {console.log(`Nome: ${nome} - role: ${role} - admin: ${isAdmin}`);}
else{ 
    isAdmin = false;
    console.log(`Nome: ${nome} - role: ${role} - admin: ${isAdmin}`);
}
