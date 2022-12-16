function func() {
    let arr = [1, 2, 3, 4];
    let somma = arr.reduce((acc, current) => acc*(current*current), 1);
    
    return somma;
}

console.log("numeri:", func())