document.addEventListener("DOMContentLoaded", function(){
    let form_utente = document.getElementById("form");

    form_utente.addEventListener("submit", function(event){
        event.preventDefault();
    });
});

class Utente{
    constructor(nome, cognome, eta, capelli){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.capelli = capelli;
    }
    descrivi(){
        return console.log(`Ciao sono l'utente ${this.nome} ${this.cognome} di anni ${this.eta} e con i capelli color ${this.capelli}`);
    }
}

function process_form(){
    form  = document.forms["form"];
    let utente = new Utente(form.elements["nome"].value, form.elements["cognome"].value, form.elements["eta"].value, form.elements["capelli"].value )    
    utente.descrivi();
}
