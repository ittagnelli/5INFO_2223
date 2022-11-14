function protect_email(str,l){

    str = str.slice(0, l+1);
    str = str.concat("...");
    return str;
}

console.log(protect_email("william.viteritti@istitutoagnelli.it", 10));