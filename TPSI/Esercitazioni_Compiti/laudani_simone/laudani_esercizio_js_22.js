function prime(num){
    if (num === 1) 
        return true;
    else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
               return false;
            }
        }
        return true;
    }
    return false;

}


function sort(array){
    return array.sort((n1,n2) => prime(n1) && prime(n2) ? 0 : prime(n1) && !prime(n2) ? -1 : 1 )
}


console.log(sort([1, 4, 7, 3, 11, 12, 20]))
