function number (numero) {
    if (+numero == 1 || +numero== 0) return 1;
    else return (number(+numero-2))+number(+numero-1);
}

let numero = 3;
console.log(`Il numero restituito della successione di Fibonacci è: `, number(1));
console.log(`Il numero restituito della successione di Fibonacci è: `, number(5));
console.log(`Il numero restituito della successione di Fibonacci è: `, number(8));
console.log(`Il numero restituito della successione di Fibonacci è: `, number(12));
console.log(`Il numero restituito della successione di Fibonacci è: `, number(0));