function abbreviazione(str){
        let primo = str.charAt(0);
        let spazio = str.indexOf(" ");
        let secondo;
        let persona;

        // console.log(spazio);//7
        // console.log(primo);//w

        let c = spazio +1;

        secondo = str.charAt(c);

        // console.log(secondo);//v

        let str2 ="";

        // str.replace(primo, str[0].toUpperCase()).slice(str[0].toUpperCase(),spazio);//nome
        
        // secondo.toUpperCase();//cognome

        persona = (str2.concat(str.replace(primo, str[0].toUpperCase()).slice(str[0].toUpperCase(),spazio)," ", secondo.toUpperCase(), "."));

        return persona;
}

let persona = abbreviazione("william viteritti");
console.log(persona);