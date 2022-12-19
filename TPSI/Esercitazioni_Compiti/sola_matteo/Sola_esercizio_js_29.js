function vettore_nomi(vettore) {
    return Array.from(vettore, (item) => item.nome)
}

let studenti = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
];

console.log(vettore_nomi(studenti));