let array1 = [1,2,3,4,5]

function trans(array1,N,M){
    let first = array1[N];
    let second = array1[M];
    array1[M] = first;
    array1[N] = second;
    return array1;
}
console.log(trans(array1,2,3));