let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
  ];

function eta_media(studenti){
    return studenti.reduce((acc, curr)=> acc + curr.eta,0)/studenti.length
}

console.log(eta_media(studenti));