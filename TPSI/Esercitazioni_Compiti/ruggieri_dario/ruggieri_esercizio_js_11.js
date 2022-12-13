let numeri = [1,2,3,4];
let stringhe = ["ciao", "come", "stai"];
function reverse(numeri){ 
    return numeri.sort((el1, el2)=> numeri.indexOf(el2)- numeri.indexOf(el1))
}

console.log(reverse(stringhe));


function reverse2(numeri){
    let Reverse = [];
    numeri.forEach(item => {
        Reverse.unshift(item);
    })
    return Reverse;
}


// console.log(reverse2(stringhe));
