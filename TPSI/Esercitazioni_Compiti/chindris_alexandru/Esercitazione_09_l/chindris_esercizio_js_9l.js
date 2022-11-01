function addizione(a,b){
    return a+b;
}

function moltiplicazione(a,b){
    return a*b;
}

function elevamento(a,b){
    return a**b;
}

function callback_function(a,b,callback){
    return callback(a,b);
}

//MAIN
console.log(callback_function(5,10,addizione));
console.log(callback_function(7.5,8,moltiplicazione));
console.log(callback_function(2,4,elevamento)); 