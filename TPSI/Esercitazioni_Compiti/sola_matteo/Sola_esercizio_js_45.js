document.addEventListener("DOMContentLoaded", function(){
    let form_utente = document.getElementById("campi");

    form_utente.addEventListener("submit", function(event){
        event.preventDefault();
    });
});

class Utenti{
    constructor(nome, cognome, eta, capelli){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.capelli = capelli;
    }
    descrivi(){
        return console.log(`Ciao sono l'utente ${this.nome} ${this.cognome} di anni ${this.eta} e con capello di colore ${this.capelli}`);
    }
}

function salvadati_form(){
    console.log("salva dati form");

    form  = document.forms["campi"];
    let user = new Utenti(form.elements["name"].value, form.elements["surname"].value, form.elements["eta"].value, form.elements["hair"].value );  
    user.descrivi();
    
    let div = document.createElement("div");
    for(property in user){
        let p = document.createElement("p");
        p.innerHTML = `${property}: ${user[property]}`;
        div.append(p);
    }

    document.body.append(div);
}
