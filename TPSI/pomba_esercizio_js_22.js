function prim(n){
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

function prim1(array){
    return array.sort((n1,n2) => prim(n1) && prim(n2) ? 0 : prim(n1) && !prim(n2) ? -1 : 1 )
}
console.log(prim1([1, 4, 7, 3, 11, 12, 20]))