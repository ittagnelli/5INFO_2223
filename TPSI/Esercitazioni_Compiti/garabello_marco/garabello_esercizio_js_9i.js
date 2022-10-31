function bigger(a,b,c){
    return a > b && a > c ? a : (b > a && b > c ? b : c);
}

console.log(`Test1 (3,2,5): ${bigger(3,2,5)}`);
console.log(`Test1 (5,6,7): ${bigger(5,6,7)}`);
console.log(`Test1 (8,9,3): ${bigger(8,9,3)}`);