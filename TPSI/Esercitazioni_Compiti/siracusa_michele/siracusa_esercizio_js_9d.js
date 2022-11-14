function SommaTuttiNumeri(Num){
    let AddNumeri = 0;
    let numero = Num;
    for(let i=1; i<=numero; i++){
        AddNumeri=AddNumeri+i;
    }
    return AddNumeri;
}

console.log(`La prima somma vale ${SommaTuttiNumeri(5)}`);
console.log(`La seconda somma vale ${SommaTuttiNumeri(10)}`);
console.log(`La terza somma vale ${SommaTuttiNumeri(15)}`);
