function maxNum (n1 , n2) {
    let max;
    n1 > n2 ? max=n1 : max=n2;
    return max;
}


//MAIN
console.log(`Massimo (1): ${maxNum(83,13)}`);
console.log(`Massimo (2): ${maxNum(500000,10000000)}`);
console.log(`Massimo (3): ${maxNum(80,96)}`);