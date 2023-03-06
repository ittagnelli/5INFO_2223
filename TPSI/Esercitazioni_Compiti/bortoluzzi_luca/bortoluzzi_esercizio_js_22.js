function ordina(n){
    if (n === 1) 
        return true;
    else if (n > 1) {
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
               return false;
            }
        }
        return true;
    }
    return false;
}

function sort(array){
    return array.sort((n_1,n_2) =>{ if(ordina(n_1) && ordina(n_2)) return 0 
        else if(ordina(n_1) && !ordina(n_2)) return -1;
        else return 1; }
}


console.log(sort([1, 4, 7, 3, 11, 12, 20]))
