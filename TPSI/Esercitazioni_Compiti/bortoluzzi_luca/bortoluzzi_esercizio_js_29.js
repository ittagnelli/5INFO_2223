let studenti = [
    { nome: "Alex", classe: 2, eta: 15 }
];
function name_f(array){
    return array.from(array, item => item.nome)
}
console.log(name_f(studenti))