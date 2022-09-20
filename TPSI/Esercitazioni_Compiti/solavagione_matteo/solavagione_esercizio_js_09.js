function login(){
   let username = prompt("Inserisci l'username");
    if(username == null){
        alert("canceled");
    }
    if(username != null && username != "Admin"){
        alert("I don't know you");
    }
    if(username == "Admin"){
        let password = prompt("Inserisci la password");
        if(password == null){
            alert("canceled");
        }
        if(password != null && password != "Agnellino"){
            alert("Wrong password");
        }
        if(password == "Agnellino"){
            alert("Welcome!");
        }
    }

}