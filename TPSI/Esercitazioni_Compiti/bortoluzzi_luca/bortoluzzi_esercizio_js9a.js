let utente = {
    nome: "Pippo",
    cognome: "Pippa",
    lavoro: "professore",
    eta: 457,
    speak : function(){
        console.log(utente.nome);
        console.log(utente.cognome)
        console.log(utente.eta)
        console.log(utente.lavoro)
    }
}

    for(let i = 0; i<1; i++){
        utente.speak();
    }