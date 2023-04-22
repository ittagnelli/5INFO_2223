document.addEventListener("DOMContentLoaded", function() {
    let form_utente = document.getElementById("utente");
    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });

});

function process_form() {
    form = document.forms["utente"];
    class User {
        constructor(nome, cognome, eta, colore_capelli) {
            this.nome = nome;
            this.eta = eta;
            this.cognome = cognome;
            this.colore_capelli = colore_capelli;
        }

        descrivi() {
           const body = document.body;
           let nome = document.createElement("p");
           nome.innerText = "nome: " + form.elements["nome"].value;
           body.append(nome);
           let cognome = document.createElement("p");
           cognome.innerText = "cognome: " + form.elements["cognome"].value;
           body.append(cognome);
           let eta = document.createElement("p");
           eta.innerText = "eta: " + form.elements["eta"].value;
           body.append(eta);
           let colore = document.createElement("p");
           colore.innerText = "colore dei capelli: " + form.elements["colore"].value;
           body.append(colore);
           console.log(`ciao io sono l'utente ${this.nome} ${this.cognome} di anni ${this.eta} e con i capelli color ${this.colore_capelli}`);
        }
    }

    let utente = new User(form.elements["nome"].value, form.elements["cognome"].value, form.elements["eta"].value, form.elements["colore"].value);
    utente.descrivi();
  
}




