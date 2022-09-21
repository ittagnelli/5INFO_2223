function start(){
    let credenziali;
    let password;

    credenziali=promt("inserisci le credenziali");
    console.log(credenziali);
    (credenziali== "" || credenziali != "Admin" || credenziali)
        alert("canceled");
    (credenziali!= "Admin" && credenziali!= "admin" && credenziali!= "")
        alert("I dont know you");
    (credenziali== "Admin" || credenziali=="admin")
        (password== "" && password!= "Agnell1no" && password!= "agnell1no")
            alert("Canceled");
        (password== "NULL" && password!= "Agnell1no" && password!= "agnell1no")
            alert("Wrong password");
        (password=="Agnell1no" || password=="agnell1no") 
            alert("You're welcome !");
}