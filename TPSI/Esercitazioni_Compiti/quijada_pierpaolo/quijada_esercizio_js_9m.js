let a = 5;
let b = 6;

console.log(addizione(a,b));
console.log(addizione((a++),(b++)));
console.log(sottrazione((a+2),(b+2)));
console.log(sottrazione((a+3),(b+3)));
console.log(moltiplicazione((a+4),(b+4)));
console.log(moltiplicazione((a+5),(b+5)));
console.log(divisione((a+6),(b+6)));
console.log(divisione((a+7),(b+7)));

let addizione = (a,b) => a+b;
let sottrazione = (a,b) => a-b;
let moltiplicazione = (a,b) => a*b;
let divisione = (a,b) => a/b;
