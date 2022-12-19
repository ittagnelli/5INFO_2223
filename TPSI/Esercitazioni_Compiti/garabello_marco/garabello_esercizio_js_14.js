function substitute(array, N, M){
    let copy = [...array]
    let tmp = (copy.splice(N,1))[0];
    copy.splice(M,0,tmp);
    return copy;
}

console.log(substitute([10, 20, 30, 40, 50], 0, 2));