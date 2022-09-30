function begin(){
    let username;
    let password;

    username=promt("Si prega di inserire l'username");
    console.log(username);
    (username== "" || username != "Admin" || username)
        alert("canceled");
    (username!= "Admin" && username!= "admin" && username!= "")
        alert("I dont know you");
    (username== "Admin" || username=="admin")
        (password== "" && password!= "Agnell1no" && password!= "agnell1no")
            alert("Canceled");
        (password== "NULL" && password!= "Agnell1no" && password!= "agnell1no")
            alert("Wrong password");
        (password=="Agnell1no" || password=="agnell1no") 
            alert("Welcome !");
}