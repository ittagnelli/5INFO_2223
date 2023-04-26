document.addEventListener("DOMContentLoaded", function() {
    let form_utente = document.getElementById("inizio");

    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});

function process_form() {
  console.log("process form");
  form = document.forms["inizio"];
  let u = new User(form.elements["nome"].value, form.elements["cognome"].value, form.elements["eta"].value, form.elements["hair"].value);
  u.print();
  let div = document.createElement("div");
  for(property in u){
    let proprieta = document.createElement("proprieta");
    proprieta.innerHTML = ` ${this.property}: ${u[property]}`;
    div.append(proprieta);
  }
  document.body.append(div);
}
class User{
    constructor(nome, cognome, eta, capelli){
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.capelli = capelli;       
    }
    print(){
        return console.log(`Hi I am ${this.nome}, ${this.cognome}. I am ${this.eta} years old.Last but not least my hair's ${this.capelli}`);
    }
}