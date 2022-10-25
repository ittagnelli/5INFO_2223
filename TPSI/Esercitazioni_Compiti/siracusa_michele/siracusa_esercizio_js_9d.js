function SommaTuttiNumeri(N){
    let AddNumeri = 0;
    let num = N;
    for(let i=0; i<num; i++){
        AddNumeri=Numeri+N;
        i++;
        N--;
    }
    return AddNumeri;
}

console.log(`La somma 1 vale ${SommaTuttiNumeri(10)}`);
console.log(`La somma 2 vale ${SommaTuttiNumeri(20)}`);
console.log(`La somma 3 vale ${SommaTuttiNumeri(30)}`);


