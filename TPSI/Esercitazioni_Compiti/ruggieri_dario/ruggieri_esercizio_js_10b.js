function protect_email(email){
    let cognome = email.slice(email.indexOf("."), email.indexOf("@"));
    email = email.replace((cognome), " ...");
    return email;
}
console.log(protect_email("dario.ruggieri@istitutoagnelli.it"));
console.log(protect_email("marco.garabello@istitutoagnelli.it"));
console.log(protect_email("alexandru.chindris@istitutoagnelli.it"));