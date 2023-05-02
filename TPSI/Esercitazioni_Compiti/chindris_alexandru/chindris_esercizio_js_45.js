// aggiunge un handler all'evento DOMContentLoaded
// che viene generato quando la pagina HTML ha terminato il suo caricamento
document.addEventListener("DOMContentLoaded", function() {

    // ricata l'oggetto DOM del form
    let form_utente = document.getElementById('form');

    //aggiunge un handler all'evento submit del form
    //in modo da inibire il normale funzionamento (invio del form verso il server)
    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});

class User {
    contructor(nome,cognome,eta,colore){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.colore = colore;
    }

    descrivi(){
        console.log(`Ciao io sono l'utente ${this.nome} ${this.cognome} di anni ${this.eta} e con i capelli color ${this.colore}`);
    }
}

//processa il form quando l'utente preme submit
function process_form(){
    console.log("process form");
    form  = document.forms["form"];
    let user = new User(form.elements["nome"].value, form.elements["cognome"].value, form.elements["eta"].value, form.elements["colore"].value);  
    user.descrivi();
}