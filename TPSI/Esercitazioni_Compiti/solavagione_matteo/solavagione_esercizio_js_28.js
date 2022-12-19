let student = [
    { nome: "Marco", classe: 4, eta: 17 },
    { nome: "Alex", classe: 2, eta: 15 },
    { nome: "William", classe: 4, eta: 18 }
    

]

function average(arr){
    let avg = arr.reduce((acc, current) => acc + current.eta / arr.length, 0)
    return avg

}

console.log(average(student))