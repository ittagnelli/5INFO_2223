function sposta(arr, N, M){
    let cp_arr = arr.slice();
    let temp = cp_arr[N];
    cp_arr[N] = cp_arr[M];
    cp_arr[M] = temp;
        
    return cp_arr;
}

let arr = [1,2,3,4,5];

console.log(sposta(arr, 0, 1));