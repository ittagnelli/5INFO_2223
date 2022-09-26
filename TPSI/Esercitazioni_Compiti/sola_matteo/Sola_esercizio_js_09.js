function Login(){
    let username = prompt("Insert username please");
    let password;
    console.log(username);

    if(username === null || username === "" || username === '0'){
        alert("Canceled");
         return;
    }

    if(username !== "Admin") {
         alert("I don't know you!");
         return;
    }
    
    if(username === "Admin"){
        password = prompt("Insert password please");
        if(password === null || password === "" || password === '0') {
             alert("Canceled");
             return;
         }
        if(password !== "Agnell1no") {
             alert("I don't know you!");
             return;
        }
        if(password === "Agnell1no") alert("Welcome!");       
    }
}
