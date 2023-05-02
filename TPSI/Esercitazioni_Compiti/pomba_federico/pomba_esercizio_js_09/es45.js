document.addEventListener("DOMContentLoaded", function() {

    let form_utente = document.getElementById('form');

    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});

class Utente {

    contructor(nome,cognome,eta,colore){

        this.nome = nome;

        this.cognome = cognome;
        
        this.eta = eta;
        
        this.colore = colore;
    }

    text(){
        console.log(`Ciao io sono l'utente ${this.nome} ${this.cognome} di anni ${this.eta} e con i capelli ${this.colore}`);
    }
}

function ff(){

    console.log("ff");

    form  = document.forms["form"];
    let user = new Utente(form.elements["nome"].value, form.elements["cognome"].value, form.elements["eta"].value, form.elements["colore"].value);  
   
    user.text();
}