let arr = [1, 4, 7, 3, 11, 12, 20];
function order(arraye){
    let primes = arraye.filter((value) => value%2 == 1)
    let other = arraye.filter((value) => value%2 == 0)  
    let final = primes.concat(other)
    return final
}
console.log(order(arr))