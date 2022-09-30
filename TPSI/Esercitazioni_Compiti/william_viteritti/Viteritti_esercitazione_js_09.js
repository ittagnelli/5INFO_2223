function add_user(){
    let nome;
    let password;

    alert("Be sure to insert your name first!"); 
    nome = prompt("Name:");
    (nome==""|| nome=="Admin") ||alert("canceled");

    (nome=="Admin" && (password = prompt("Password:")) || alert("Access not provided"));

    
    
    

    (password==""||password=="Agnellin1") || alert("Access not provided");

    alert("Access garanteed");
}