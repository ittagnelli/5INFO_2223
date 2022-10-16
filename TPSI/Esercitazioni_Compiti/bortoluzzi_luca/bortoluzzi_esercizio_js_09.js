function bottone(){
    let nome;
    let password;

    alert("Be sure to insert your name first!"); 
    nome = prompt("Nome:");
    (nome==""|| nome=="Admin") ||alert("canceled");

    (nome=="Admin" && (password = prompt("Password:")) || alert("Access not provided"));

    (password==""||password=="Agnell1ni") || alert("Access not provided");

    alert("Access garanteed");
}