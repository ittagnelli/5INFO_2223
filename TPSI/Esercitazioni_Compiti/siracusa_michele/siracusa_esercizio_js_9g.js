function minor(oggetto1,oggetto2,oggetto3){
    let Data1 = new Date(1,1,1,oggetto1.Ore,oggetto1.Minuti,oggetto1.Secondi);
    let Data2 = new Date(1,1,1,oggetto2.Ore,oggetto2.Minuti,oggetto2.Secondi);
    let Data3 = new Date(1,1,1,oggetto3.Ore,oggetto3.Minuti,oggetto3.Secondi);

    if (Data1<Data2 && Data1< Data3) return ogg1;
    if (Data2<Data1 && Data2<Data3) return ogg2;
    return ogg3
}

let Data1 = {
    Ore: 10,
    Minuti: 15,
    Secondi: 30
}

let Data2 = {
    Ore: 11,
    Minuti: 15,
    Secondi: 30
}

let Data3 = {
    Ore: 13,
    Minuti: 30,
    Secondi: 30
}

let Data4 = {
    Ore: 12,
    Minuti: 15,
    Secondi: 30
}

let Data5 = {
    Ore: 18,
    Minuti: 14,
    Secondi: 30
}

let Data6 = {
    Ore: 4,
    Minuti: 20,
    Secondi: 50
}

let min1 = minor(Data1,Data2,Data3);
let min2 = minor(Data4,Data5,Data6);

console.log(`minimo 1:\nSecondi: ${min1.Secondi}\nMinuti ${min1.Minuti}\nOre: ${min1.Ore}\n`);
console.log(`minimo 2:\nSecondi: ${min2.Secondi}\nMinuti ${min2.Minuti}\nOre: ${min2.Ore}\n`);