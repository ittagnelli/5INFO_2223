function max(a, b, c){

    a>b ? (a>c ? console.log("Il valore massimo è",a) : console.log("Il valore massimo è",c))
     : b>c ? console.log("Il valore massimo è", b) : console.log("Il valore massimo è", c);
}

console.log(max(3,4,50));
console.log(max(8,5,0));
console.log(max(12,24,1));