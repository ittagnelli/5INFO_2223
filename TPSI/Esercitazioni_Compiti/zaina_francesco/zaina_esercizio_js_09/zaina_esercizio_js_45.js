document.addEventListener("DOMContentLoaded", function(){
    let form_utente = document.getElementById("compilazione_dati");

    form_utente.addEventListener("submit", function(event){
        event.preventDefault();
    });
});

function process_form(){
    console.log("process form");
    form  = document.forms["compilazione_dati"];
    let user = new Utenti(form.elements["name"].value, form.elements["surname"].value, form.elements["eta"].value, form.elements["idcapelli"].value )    
    user.descrivi();
    let div = document.createElement("div");
    for(property in user){
        let p = document.createElement("p");
        p.innerHTML = `${property}: ${user[property]}`;
        div.append(p);
    }
    document.body.append(div);
}
class Utenti{
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