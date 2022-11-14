function protect_email(str){

    if(true == str.includes("coding", "creativo")){
        return str;
    }
    else{
        return console.log("parole non trovate");
    }
    
    
}

console.log(protect_email("william coding e creativo @istitutoagnelli.it"));