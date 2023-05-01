// aggiunge un handler all'evento DOMContentLoaded
// che viene generato quando la pagina HTML ha terminato il suo caricamento
document.addEventListener("DOMContentLoaded", function() {

    // ricata l'oggetto DOM del form
    let form_utente = document.getElementById("form");

    //aggiunge un handler all'evento submit del form
    //in modo da inibire il normale funzionamento (invio del form verso il server)
    form_utente.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});

//processa il form quando l'utente preme submit
function process_form() {
    console.log("process form");

    form = document.forms["form"];
    let array = Array.from(form.elements);
    array.pop();
    let map = new Map();

    array.forEach(el => map.set(el.id,el.value));
    
    let user = new User(map);
    user.descrivi();
    user.add();
}


class User {
    constructor(values) {
        this.values= values
    }

    descrivi() {
        console.log(`ciao io sono l’utente ${this.values.get("name")} ${this.values.get("surname")} di anni ${this.values.get("age")} e con i capelli color ${this.values.get("hair")}`)
    }

    add() {
        for(let [name, value] of this.values) {
            let p = document.createElement("p");
            p.innerText = `${name} => ${value}`
            document.body.appendChild(p);
        }
        
    }
}