function Differenza_date (oggetto1,oggetto2){
    let Data1 = new Date(1,1,1,oggetto1.Ore,oggetto1.Minuti,oggetto1.Secondi);
    let Data2 = new Date(1,1,1,oggetto2.Ore,oggetto2.Minuti,oggetto2.Secondi);

    let Differenza = Data2 - Data1;

    return {
        Millisecondi: Differenza,
        Secondi: Differenza/1000,
        Minuti: Differenza/(1000*60),
        Ore: Differenza/(60*60*1000)
    }
}

let Data1 = {
    Ore: 08,
    Minuti: 15,
    Secondi: 05
}

let Data2 = {
    Ore: 13,
    Minuti: 50,
    Secondi: 01
}

let Data3 = {
    Ore: 08,
    Minuti: 30,
    Secondi: 15
}

let Data4 = {
    Ore: 13,
    Minuti: 50,
    Secondi: 05
}

let Differenza1 = Differenza_date(Data1,Data2);
let Differenza2 = Differenza_date(Data3,Data4);
console.log(`La prima differenza vale:\nMillisecondi: ${Differenza1.Millisecondi}\nSecondi: ${Differenza1.Secondi}\nMinuti: ${Differenza1.Minuti}\nOre: ${Differenza1.Ore}\n`);
console.log(`La seconda differenza vale:\nMillisecondi: ${Differenza2.Millisecondi}\nSecondi: ${Differenza2.Secondi}\nMinuti: ${Differenza2.Minuti}\nOre: ${Differenza2.Ore}\n`);



