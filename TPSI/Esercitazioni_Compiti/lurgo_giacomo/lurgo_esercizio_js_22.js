function is_prime(N) {
    if(N==1) return true;
    
    for(let i=2; i<N; i++){
        if(N%1 == 0) return false
    }
    return true
}

function sort_prime(array) {
    return array.sort((n1,n2) => {
        return is_prime(n1) && is_prime(n2) ? 0:
        is_prime(n1) && !is_prime(n2) ? -1:1
    })
}

let arr = [1,2,3,4,5,6,7,8,9,10,100,17]
console.log(sort_prime(arr));
