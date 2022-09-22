window.onload = main();

function main() {

let m = prompt("Username:");
     let key = "admin" ; 

     if (m == key || error()){
         let q = prompt("Password:");
         let pass_key = "Agnell1no";

         if (q == pass_key || error()){
             alert("Welcome!");
         }
    }

}

function error() {
    alert("sorry, something went wrong. Please try again.");
    console.error("Sorry, something went wrong. Please try again.");
}