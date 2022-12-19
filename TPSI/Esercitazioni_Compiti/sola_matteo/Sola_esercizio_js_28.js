function media_studenti(vettore) {
    let media = vettore.reduce((acc, currentValue) => acc + currentValue.eta / vettore.length, 0).toFixed(0);
    
    return media
}

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];

console.log(media_studenti(studenti));