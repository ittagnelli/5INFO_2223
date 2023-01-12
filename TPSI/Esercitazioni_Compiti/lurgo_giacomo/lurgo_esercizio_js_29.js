let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];

function nomi(array){
    return Array.from(array, item => item.nome)
}

console.log(nomi(studenti))