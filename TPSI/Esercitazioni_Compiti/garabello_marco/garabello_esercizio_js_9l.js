function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function molt(a,b){
    return a*b;
}

function op(a,b,func){
    return func(a,b);
}

console.log(op(3,2,add));
console.log(op(5,2,sub));
console.log(op(3,3,molt));