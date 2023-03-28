let utente = {
    nome: "andrea",
    role: "pippo"
}
function visualizza_studente({nome, role, isadmin = false}) {
    console.log(`Lo studente si chiama ${nome} ${role}`);
    console.log(isadmin);
}
visualizza_studente(utente);