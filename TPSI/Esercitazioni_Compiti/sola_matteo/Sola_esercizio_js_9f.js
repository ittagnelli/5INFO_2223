function Fibonacci (num) {
    let res = 0;
    let valore1 = 1, valore2 = 1;

    for(let i = 2; i < num; i++){
        res = valore1 + valore2;
        valore1 = valore2;
        valore2 = res;
    }

    return res;
}

function main() {
    console.log("I valori di Fibonacci dei cinque parametri sono:");
    console.log(Fibonacci(8));
    console.log(Fibonacci(20));
    console.log(Fibonacci(30));
    console.log(Fibonacci(40));
    console.log(Fibonacci(50));
}

main();
