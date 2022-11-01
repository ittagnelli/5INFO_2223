function maxNum (n1 , n2, n3) {
    let max;
    n1 < n2 ? n1 < n3 ? max=n1 : max=n3 : n2 < n3 ? max=n2 : max=n3;
    return max;
}


//MAIN
console.log(`Massimo (1): ${maxNum(34,67879, 600000)}`);
console.log(`Massimo (2): ${maxNum(353,876587, 574)}`);
console.log(`Massimo (3): ${maxNum(352,76, 0.5)}`);