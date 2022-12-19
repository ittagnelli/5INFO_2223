function numeri_primi(arr) {
    let new_arr = [];
    
    arr.forEach(element => {
        if(isPrime(element))
            new_arr.unshift(element);
        else
            new_arr.push(element);
    });

    return new_arr
}

function isPrime(n){
    for (let i = 2; i < n; i++)
        if(n % i == 0 && i != n) 
            return false
    return true
}

let numeri = [1, 4, 7, 3, 11, 12, 20];

console.log(numeri_primi(numeri));