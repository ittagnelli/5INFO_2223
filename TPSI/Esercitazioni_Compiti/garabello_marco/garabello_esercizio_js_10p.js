function cut(str, N){
    let copy = str;

    for(let i = 0; i<N-1; i++)
        copy = copy.replace(" ", "K");
    let last = copy.indexOf(" ");
    return str.slice(0, last);
}

console.log(cut("Facciamo tanti esercizi che ci fanno bene", 3));