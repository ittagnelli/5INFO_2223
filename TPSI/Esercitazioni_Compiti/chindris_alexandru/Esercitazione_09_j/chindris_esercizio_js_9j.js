function stamp(object) {
    for(let chiave in object) {
        console.log(`Nome: ${chiave}`);
        console.log(`Tipo dell'attributo: `+ typeof(object[chiave]) );
        let string = "stringa test";
        if(typeof(object[chiave]) == typeof(string)){
            console.log(`Valore dell'attributo : ${object[chiave].toLowerCase()}`);
        }else{
            console.log(`Valore dell'attributo : ${object[chiave]}`);
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


