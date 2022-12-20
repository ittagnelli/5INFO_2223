let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
  ];

function media(studenti){
    return studenti.reduce((acc, curr)=> acc + curr.eta,0)/studenti.length
}

console.log(media(studenti));