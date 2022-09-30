
function start(){
    let credenziali;
    let password;

    credenziali=prompt("inserisci le credenziali: ");
    console.log(credenziali);
    credenziali== "" || credenziali == "Admin" || credenziali!="Canceled" || alert("canceled");
    credenziali== "Admin" || credenziali == "" || credenziali== "Canceled" || alert("I dont know you");
    credenziali != "Admin" || (password=prompt("inserisci la password"));
    console.log(password);
    password== "Agnell1no" || password == "" || password== "Canceled" || alert("Wrong password");
        if (password== "Canceled")  alert("Canceled");
        if (password=="Agnell1no")  alert("You're welcome !");
}


