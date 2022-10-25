function SommaTuttiNumeri(N){
    let AddNumeri = 0;
    let num = N;
    for(let i=1; i<=num; i++){
        AddNumeri=AddNumeri+i;
    }
    return AddNumeri;
}

console.log(`La somma 1 vale ${SommaTuttiNumeri(5)}`);
console.log(`La somma 2 vale ${SommaTuttiNumeri(20)}`);
console.log(`La somma 3 vale ${SommaTuttiNumeri(30)}`);


