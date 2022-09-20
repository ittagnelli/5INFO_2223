function login(){
    let username;
    let password;

    username = prompt("Inserire l'username");
    console.log(username);
    (username == "" || username || username == "Admin" || 0) || alert("Canceled");
    (username == null || username == "Admin" || 0) || alert("I don't know you");
    username != null && username == "Admin" && (password = prompt("Inserire password: ")) == "Agnell1no" && alert("Welcome");
    username != null && username == "Admin" && (password || alert("Canceled"));
    password == null || password == "Agnell1no" || alert("Wrong password");

}