let a=1;
let b=3;

console.log(op(a,b,addizione));
console.log(op((a++),(b++),moltiplicazione));
console.log(op((a+2),(b+2),potenza));

function op(a,b,func){
    return func(a,b);
}

function addizione(a,b){
    return a+b;
}

function moltiplicazione(a,b){
    return a*b;
}

function potenza(a,b){
    return a^b;
}

