// aggiunge un handler all'evento DOMContentLoaded
// che viene generato quando la pagina HTML ha terminato il suo caricamento
document.addEventListener("DOMContentLoaded", function() {
    let form_utente = document.getElementById("form_id");
    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});
function process_form() {
    console.log("process form");
    form = document.forms["form_id"];
    console.log(form.elements["nome"].value);
    console.log(form.elements["colore"].value);
    console.log(form.elements["eta"].value);
    let User={
        nome: process_form.nome.value,
        colore: process_form.colore.value,
        eta: process_form.eta,
        };
    
    console.log(User);
  }



  function process_form() {
    console.log("process form");
    form = document.forms["form_id"];
    let Utente ={
        nome:(form.elements["nome"].value),
        colore:(form.elements["colore"].value),
        eta:(form.elements["eta"].value),
    };
    return Utente;  
}

    function definisci(Utente) {
            return `${Utente.nome} ${Utente.eta} del ${Utente.colore}`;
          } 
    
    console.log(definisci(Utente));
