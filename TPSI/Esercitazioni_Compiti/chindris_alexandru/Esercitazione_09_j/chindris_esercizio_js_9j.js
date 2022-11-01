function stamp(object) {
    for(let chiave in object) {
        console.log(`Nome: ${chiave}`);
        console.log(`Tipo dell'attributo: `+ typeof(object[chiave]) );
        let string = "stringa test";
        if(typeof(object[chiave]) == typeof(string)){
            let lower= object[chiave].tolowercase();
            console.log(`Valore dell'attributo : ${lower}`);
            console.log("1");
        }else{
            console.log(`Valore dell'attributo : ${object[chiave]}`);
            console.log("2");
        }
        console.log(" ");   
    }
}

objectLiteral = {
    name: "Pisquano",
    eta: 34,
    peso: 60.5,
    residenza: "Moncalieri",
    capelli: 0,
}
objectLiteral1 = {
    name: "Branda",
    eta: 56,
    peso: 67.5,
    residenza: "Torino",
    capelli: 4,
}
//MAIN
console.log(stamp(objectLiteral));
console.log(stamp(objectLiteral1));


