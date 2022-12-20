let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
  ];

function nomi(studenti){
    let arr= Array.from(studenti, item => item.nome);
    return arr;
}

console.log(nomi(studenti));