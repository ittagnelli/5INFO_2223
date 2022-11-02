function SommaTuttiNumeri(N){
    let AddNumeri = 0;
    let num = N;
    for(let i=1; i<=num; i++){
        AddNumeri=AddNumeri+i;
    }
    return AddNumeri;
}

console.log(`La prima somma vale ${SommaTuttiNumeri(5)}`);
console.log(`La seconda somma vale ${SommaTuttiNumeri(10)}`);
console.log(`La terza somma vale ${SommaTuttiNumeri(15)}`);