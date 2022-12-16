function ritorno_maiuscole(stringa){
    let vet = stringa.split('');

    return vet.filter((value)=> {
        return value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90
    });
}

let stringa = "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff";

console.log(ritorno_maiuscole(stringa));