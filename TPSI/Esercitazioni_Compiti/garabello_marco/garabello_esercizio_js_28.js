function avg(array){
    return ((array.reduce((acc,curr) => acc += curr.eta,0))/array.length)
}

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
  ];


console.log(avg(studenti));
