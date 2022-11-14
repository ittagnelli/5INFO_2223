function protect_email(email){
    let at = email.indexOf('@');
    let dot = email.indexOf('.');
    let toreplace = email.slice(dot+1, at);
    let ret = email.replace(toreplace, '..');
    return ret;
}

console.log(protect_email("marco.garabello@gmail.com"));