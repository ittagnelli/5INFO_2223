let student = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
    

]

function nouns(arr){
    let noun = Array.from(arr, (value) => value.nome)
    return noun
}

console.log(nouns(student))