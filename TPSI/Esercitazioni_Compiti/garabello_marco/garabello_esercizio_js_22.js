function is_prime(number){
    if (number === 1) 
        return true;
    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
               return false;
            }
        }
        return true;
    }
    return false;

}


function sort_prime(array){
    return array.sort((n1,n2) => is_prime(n1) && is_prime(n2) ? 0 : is_prime(n1) && !is_prime(n2) ? -1 : 1 )
}


console.log(sort_prime([1, 4, 7, 3, 11, 12, 20]))
