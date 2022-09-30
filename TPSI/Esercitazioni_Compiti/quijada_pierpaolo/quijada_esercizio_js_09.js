function login(){
  let password;
  let user;
 
  user = prompt("username: ");
  (user == null || user == "Admin" || 0) || alert("I don't know you");
  user != null && user == "Admin" && (password = prompt("password: ")) == "Agnell1no" && alert("Welcome");
  password == null || password == "Agnell1no" || alert("Wrong password");
}