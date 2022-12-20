let studenti = [
    { nome: "Marco", classe: 1, eta: 17, mese: "marzo"},
    { nome: "Alex", classe: 3, eta: 15, mese: "gennaio"},
    { nome: "William", classe: 4, eta: 18, mese: "giugno"},
    { nome: "Gino", classe: 4, eta: 14, mese: "febbraio"},
    { nome: "Pierpaolo", classe: 5, eta: 17, mese: "dicembre"},
];

let studenti_per_mese = studenti.sort((s1, s2) => mesi.indexOf(s1.mese) - mesi.indexOf(s2.mese));
let studenti_per_mese_2 = studenti.sort((s1, s2) => mesi.indexOf(s2.mese) - mesi.indexOf(s1.mese));
let mesi=["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

console.log("Ordine crescente: ", studenti_per_mese);
console.log("Ordine decrescente: ", studenti_per_mese_2);