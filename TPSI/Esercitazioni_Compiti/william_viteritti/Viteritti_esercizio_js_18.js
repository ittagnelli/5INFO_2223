function quadrati(array){
    let q = array.map((numero) => numero*numero);
    let somma = q.reduce((acc, current) => acc+current, 0);
    return somma;
}

let array = [10,20,30,40];
console.log(quadrati(array));