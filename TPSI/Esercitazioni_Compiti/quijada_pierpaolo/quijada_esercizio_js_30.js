

function filter_f(arr, N, M){
    return arr.filter(item => item >= N && item <= M)
}

console.log(filter_f([1,2,3,4,5,6,7],1,6))