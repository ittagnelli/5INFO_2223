// ordina numeri primi prima 
function ordina(arr){
    return arr.sort((a,b)=>{
        if(check(a) && !check(b)) return -1;
        if(check(a) && check(b)) return 0;
        if(!check(a) && check(b)) return 1;
    })
}

function check(value){
    let primo = true; // parto dal presupposto che sia vero e altero il suo stato successivamente
    if (value == 1) {
        primo = false;
    }
    else if (value > 1) {
        for (let i = 2; i < value; i++) {
            if (value % i == 0) {
                primo = false;
                break;
            }
        }
    }
    return primo;
}

console.log(ordina([1, 4, 7, 3, 11, 12, 20]))