function prime_numbers(array) {

    let new_array = [];
    
    array.forEach(element => {
        
        if(isPrime(element))
            new_array.unshift(element);

        else
            new_array.push(element);

    });

    return new_array;
}

function isPrime(n){
    for (let i = 2; i < n; i++)
        if(n % i == 0 && i != n) 

            return false

    return true
}

let numeri = [1, 4, 7, 3, 11, 12, 20];

console.log(prime_numbers(numbers));


