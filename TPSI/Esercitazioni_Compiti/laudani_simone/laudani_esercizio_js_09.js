function login(){
    let user;
    let password;

    user = prompt("Inserire user utente");
    (user == "" || user || user == "Admin" || 0) || alert("Errore");
    (user == null || user == "Admin" || 0) || alert("non riconosciuto");
    user != null && user == "Admin" && (password = prompt("Password: ")) == "1234" && alert("Benvenuto!");
    user != null && user == "Admin" && (password || alert("Annullato"));
    password == null || password == "1234" || alert("password errata");

}