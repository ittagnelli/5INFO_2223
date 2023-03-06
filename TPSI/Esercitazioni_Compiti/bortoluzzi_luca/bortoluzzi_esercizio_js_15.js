function elimina(arr, N){
    let cp_arr = arr.slice();
    if(cp_arr.includes(N)){
       return cp_arr.filter((value) => value != N);
    }
}

let arr = [1,2,3,4,5,6,7,8,9]

console.log(elimina(arr,3));