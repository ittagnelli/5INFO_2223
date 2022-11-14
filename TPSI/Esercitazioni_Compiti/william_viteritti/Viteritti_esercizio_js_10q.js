    function occorrenza(str1, str2){

    if(str1.includes(str2)==true){
        return str1.replace(str2, "");
    }
    else{
        return console.log("Errore");
    }

    }
    console.log(occorrenza("It is a beautiful day", "a"));